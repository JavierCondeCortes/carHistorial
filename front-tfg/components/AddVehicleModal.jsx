'use client';

import React, { useEffect, useState } from 'react';
import { fetchBrands } from '@/lib/api/vehicles';
import { getVehiclePhoto, readImageFile, saveVehiclePhoto } from '@/lib/vehiclePhotos';
import { uploadFile } from '@/lib/uploadFile';
import AlertItem from './AlertItem';
import FormField from './forms/FormField';

const EMPTY_FORM = {
    id: '',
    marca_id: '',
    matricula: '',
    modelo: '',
    km_recorridos: '',
    pegatina: '',
    tipo_combustible: '',
    ultima_fecha_itv: '',
};

function buildForm(vehicle) {
    if (!vehicle) return EMPTY_FORM;

    return {
        id: vehicle.id || '',
        marca_id: vehicle.marca?.id || '',
        matricula: vehicle.matricula || '',
        modelo: vehicle.modelo || '',
        km_recorridos: vehicle.km_recorridos ?? vehicle.kilometros_recorridos ?? '',
        pegatina: vehicle.pegatina || '',
        tipo_combustible: vehicle.tipo_combustible || '',
        ultima_fecha_itv: normalizeDate(vehicle.ultima_fecha_itv),
    };
}

export default function AddVehicleModal({ isOpen, onClose, onSuccess, vehicle = null }) {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [brands, setBrands] = useState([]);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(null);
    const isEditing = Boolean(vehicle?.id);

    useEffect(() => {
        if (isOpen) {
            setFormData(buildForm(vehicle));
            setPhotoPreview(getVehiclePhoto(vehicle));
            setFormError(null);
            fetchBrands().then(setBrands).catch(() => setBrands([]));
        }
    }, [isOpen, vehicle]);

    const updateField = (field) => (event) => {
        setFormData((current) => ({ ...current, [field]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormError(null);

        const photoFile = event.target.elements.photo?.files?.[0];
        const validationError = validateVehicleForm(formData);
        if (validationError) {
            setFormError(validationError);
            return;
        }

        setLoading(true);
        const payload = {
            ...(isEditing ? { id: Number(formData.id) } : {}),
            marca: { id: Number(formData.marca_id) },
            matricula: formData.matricula.trim().toUpperCase(),
            modelo: formData.modelo.trim(),
            km_recorridos: Number(formData.km_recorridos || 0),
            pegatina: formData.pegatina.trim(),
            tipo_combustible: formData.tipo_combustible.trim(),
            ultima_fecha_itv: formData.ultima_fecha_itv || null,
        };

        try {
            await onSuccess(payload);
            const uploadedPhoto = photoFile ? await uploadFile(photoFile, 'vehicles') : null;
            saveVehiclePhoto({ id: formData.id, matricula: payload.matricula }, uploadedPhoto?.url || photoPreview);
            onClose();
        } catch (error) {
            setFormError(error.message || 'Error al guardar el vehiculo.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 w-full max-w-3xl border border-primary/30">
                <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl font-black text-primary uppercase tracking-tight">
                            {isEditing ? 'Editar vehiculo' : 'Agregar vehiculo'}
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">Datos asociados a tu usuario autenticado.</p>
                    </div>
                    <button type="button" onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formError && <div className="md:col-span-2"><AlertItem type="error" message={formError} /></div>}

                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-center rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                        <div className="aspect-video rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            {photoPreview ? (
                                <img src={photoPreview} alt="Vista previa" className="w-full h-full object-cover" />
                            ) : (
                                <span className="material-symbols-outlined text-4xl text-slate-400">directions_car</span>
                            )}
                        </div>
                        <FormField label="Foto del coche">
                            <input
                                name="photo"
                                type="file"
                                accept="image/*"
                                onChange={async (event) => setPhotoPreview(await readImageFile(event.target.files?.[0]))}
                                className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-bold file:text-white"
                            />
                        </FormField>
                    </div>

                    <FormField label="Marca">
                        <select
                            name="marca_id"
                            required
                            value={formData.marca_id}
                            onChange={updateField('marca_id')}
                            className="border border-primary/30 rounded-lg p-2.5 text-sm"
                        >
                            <option value="">Seleccionar marca...</option>
                            {brands.map((brand) => (
                                <option key={brand.id} value={brand.id}>{brand.nombre}</option>
                            ))}
                        </select>
                    </FormField>

                    <FormField label="Matricula">
                        <input
                            name="matricula"
                            required
                            disabled={isEditing}
                            value={formData.matricula}
                            onChange={updateField('matricula')}
                            className="border border-primary/30 rounded-lg p-2.5 text-sm uppercase disabled:bg-slate-100 disabled:text-slate-500"
                            placeholder="1234ABC"
                        />
                    </FormField>

                    <FormField label="Modelo">
                        <input
                            name="modelo"
                            required
                            value={formData.modelo}
                            onChange={updateField('modelo')}
                            className="border border-primary/30 rounded-lg p-2.5 text-sm"
                            placeholder="Seat Leon"
                        />
                    </FormField>

                    <FormField label="Kilometros recorridos">
                        <input
                            name="km_recorridos"
                            type="number"
                            min="0"
                            value={formData.km_recorridos}
                            onChange={updateField('km_recorridos')}
                            className="border border-primary/30 rounded-lg p-2.5 text-sm"
                            placeholder="0"
                        />
                    </FormField>

                    <FormField label="Pegatina">
                        <input
                            name="pegatina"
                            value={formData.pegatina}
                            onChange={updateField('pegatina')}
                            className="border border-primary/30 rounded-lg p-2.5 text-sm"
                            placeholder="C, ECO, 0..."
                        />
                    </FormField>

                    <FormField label="Tipo combustible">
                        <select
                            name="tipo_combustible"
                            required
                            value={formData.tipo_combustible}
                            onChange={updateField('tipo_combustible')}
                            className="border border-primary/30 rounded-lg p-2.5 text-sm"
                        >
                            <option value="">Seleccionar combustible...</option>
                            <option value="diesel">Diesel</option>
                            <option value="gasolina">Gasolina</option>
                            <option value="electrico">Electrico</option>
                            <option value="hibrido">Hibrido</option>
                            <option value="gas">Gas</option>
                        </select>
                    </FormField>

                    <FormField label="Fecha ultima ITV">
                        <input
                            name="ultima_fecha_itv"
                            type="date"
                            max={new Date().toISOString().slice(0, 10)}
                            value={formData.ultima_fecha_itv}
                            onChange={updateField('ultima_fecha_itv')}
                            className="border border-primary/30 rounded-lg p-2.5 text-sm"
                        />
                    </FormField>

                    <div className="md:col-span-2 flex gap-3 justify-end mt-6">
                        <button type="button" onClick={onClose} className="px-6 py-2 text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors uppercase">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-primary text-white px-8 py-3 rounded-xl font-black text-sm shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all uppercase tracking-wider disabled:opacity-50"
                        >
                            {loading ? 'Guardando...' : isEditing ? 'Guardar cambios' : 'Agregar vehiculo'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function normalizeDate(date) {
    if (!date) return '';
    const parsed = new Date(date);
    return Number.isNaN(parsed.getTime()) ? '' : parsed.toISOString().slice(0, 10);
}

function validateVehicleForm(formData) {
    if (!formData.marca_id) return 'Selecciona la marca del vehiculo.';
    if (!formData.matricula.trim()) return 'Indica la matricula del vehiculo.';
    if (!formData.modelo.trim()) return 'Indica el modelo del vehiculo.';
    if (!formData.tipo_combustible) return 'Selecciona el tipo de combustible.';

    const km = Number(formData.km_recorridos || 0);
    if (Number.isNaN(km) || km < 0) return 'Los kilometros recorridos deben ser un numero mayor o igual a 0.';

    if (formData.ultima_fecha_itv) {
        const itvDate = new Date(formData.ultima_fecha_itv);
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        if (Number.isNaN(itvDate.getTime())) return 'La fecha de ultima ITV no es valida.';
        if (itvDate > today) return 'La fecha de ultima ITV no puede ser posterior a la fecha actual.';
    }

    return null;
}
