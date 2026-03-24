import React, { useState, useEffect } from 'react';
import AlertItem from './AlertItem';

const AddVehicleModal = ({ isOpen, onClose, onSubmit, modelos = [], motorizaciones = [], pegatinas = [], errors = {} }) => {
    const [marcas, setMarcas] = useState([]);
    const [marcaInput, setMarcaInput] = useState('');
    const [marcaId, setMarcaId] = useState('');
    const [showMarcaList, setShowMarcaList] = useState(false);
        // Cargar marcas desde la API al abrir el modal
        useEffect(() => {
            if (isOpen) {
                fetch('http://localhost:8000/api/marcas')
                    .then(res => res.json())
                    .then(data => setMarcas(data))
                    .catch(() => setMarcas([]));
            }
        }, [isOpen]);
    const [modeloInput, setModeloInput] = useState('');
    const [modeloId, setModeloId] = useState('');
    const [motorizacionId, setMotorizacionId] = useState('');
    const [pegatinaId, setPegatinaId] = useState('');
    const [visible, setVisible] = useState(false);
    // Estado para error general
    const [formError, setFormError] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});

    React.useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            // Espera la animación de salida antes de ocultar
            setTimeout(() => setVisible(false), 300);
        }
    }, [isOpen]);

    if (!visible && !isOpen) return null;
    const modalAnim = isOpen ? 'modal-fade-in' : 'modal-fade-out';
    // Handler para submit personalizado
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(null);
        const form = e.target;
        const newFieldErrors = {};
        // Solo marca y modelo obligatorios
        if (!marcaInput || !marcaId) newFieldErrors.marca = 'La marca es obligatoria';
        if (!modeloInput || !modeloId) newFieldErrors.modelo = 'El modelo es obligatorio';
        setFieldErrors(newFieldErrors);
        if (Object.keys(newFieldErrors).length > 0) {
            setFormError('Por favor, completa los campos obligatorios.');
            return;
        }
        onSubmit(e);
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-12 w-full max-w-6xl border border-primary/30 transition-transform duration-300 flex ${modalAnim}`}>
                {/* Animaciones personalizadas para el modal y errores */}
                <style jsx>{`
                @keyframes modalFadeIn {
                    0% { opacity: 0; transform: scale(0.95); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes modalFadeOut {
                    0% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.95); }
                }
                .modal-fade-in {
                    animation: modalFadeIn 0.3s ease;
                }
                .modal-fade-out {
                    animation: modalFadeOut 0.3s ease;
                }
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(-8px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease;
                }
                `}</style>
                {/* Columna izquierda: imagen */}
                <div className="hidden md:flex flex-col items-center justify-center w-1/2 pr-12">
                    <div className="w-full h-[500px] rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-primary/20">
                        {/* Aquí puedes poner tu imagen personalizada */}
                        <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800" alt="Vehículo" className="object-cover w-full h-full" />
                    </div>
                </div>
                {/* Columna derecha: formulario */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-black mb-8 text-primary text-center">Agregar Vehículo</h2>
                    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Alerta general de error */}
                        {formError && (
                            <div className="col-span-1 md:col-span-2">
                                <AlertItem type="error" message={formError} />
                            </div>
                        )}
                        {/* Marca (combobox) */}
                        <label className="flex flex-col gap-1 relative">
                            <span className="font-semibold text-sm">Marca</span>
                            <input
                                className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                name="marca_id"
                                autoComplete="off"
                                placeholder="Escribe o selecciona marca"
                                value={marcaInput}
                                onFocus={() => setShowMarcaList(true)}
                                onBlur={() => setTimeout(() => setShowMarcaList(false), 150)}
                                onChange={e => {
                                    setMarcaInput(e.target.value);
                                    setMarcaId('');
                                    setShowMarcaList(true);
                                }}
                            />
                            {(showMarcaList || marcaInput) && (
                                <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border border-primary/30 rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
                                    {marcas.length > 0 ? (
                                        marcas
                                            .filter(m => m.nombre.toLowerCase().includes(marcaInput.toLowerCase()))
                                            .map(m => (
                                                <div
                                                    key={m.id}
                                                    className={`px-4 py-2 cursor-pointer hover:bg-primary/10 ${marcaId === m.id ? 'bg-primary/10 font-bold' : ''}`}
                                                    onMouseDown={() => {
                                                        setMarcaId(m.id);
                                                        setMarcaInput(m.nombre);
                                                        setShowMarcaList(false);
                                                    }}
                                                >
                                                    {m.nombre}
                                                </div>
                                            ))
                                    ) : (
                                        <div className="px-4 py-2 text-slate-400">Cargando marcas...</div>
                                    )}
                                    {marcas.filter(m => m.nombre.toLowerCase().includes(marcaInput.toLowerCase())).length === 0 && (
                                        <div className="px-4 py-2 text-slate-400">Sin resultados</div>
                                    )}
                                </div>
                            )}
                            <input type="hidden" name="marca_id" value={marcaId} />
                            {fieldErrors.marca && (
                                <AlertItem type="error" message={fieldErrors.marca} />
                            )}
                        </label>
                        {/* Modelo (combobox, filtrado por marca) */}
                        <label className="flex flex-col gap-1 relative">
                            <span className="font-semibold text-sm">Modelo</span>
                            <input
                                className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                name="modelo_id"
                                autoComplete="off"
                                placeholder="Escribe o selecciona modelo"
                                value={modeloInput}
                                onChange={e => {
                                    setModeloInput(e.target.value);
                                    setModeloId('');
                                }}
                            />
                            {modeloInput && (
                                <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border border-primary/30 rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
                                    {modelos.filter(m =>
                                        (!marcaId || m.marca_id === Number(marcaId)) &&
                                        m.nombre.toLowerCase().includes(modeloInput.toLowerCase())
                                    ).map(m => (
                                        <div
                                            key={m.id}
                                            className="px-4 py-2 cursor-pointer hover:bg-primary/10"
                                            onClick={() => {
                                                setModeloId(m.id);
                                                setModeloInput(m.nombre);
                                            }}
                                        >
                                            {m.nombre}
                                        </div>
                                    ))}
                                    {modelos.filter(m =>
                                        (!marcaId || m.marca_id === Number(marcaId)) &&
                                        m.nombre.toLowerCase().includes(modeloInput.toLowerCase())
                                    ).length === 0 && (
                                            <div className="px-4 py-2 text-slate-400">Sin resultados</div>
                                        )}
                                </div>
                            )}
                            <input type="hidden" name="modelo_id" value={modeloId} />
                            {fieldErrors.modelo && (
                                <AlertItem type="error" message={fieldErrors.modelo} />
                            )}
                        </label>
                        {/* pegatina ya no es obligatoria */}
                        {/* Motorización (solo desplegable) */}
                        <label className="flex flex-col gap-1">
                            <span className="font-semibold text-sm">Motorización</span>
                            <select className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="motorizacion_id" value={motorizacionId} onChange={e => setMotorizacionId(e.target.value)}>
                                <option value="">Selecciona motorización</option>
                                {motorizaciones.map(m => <option key={m.id} value={m.id}>{m.nombre}</option>)}
                            </select>
                            {/* motorizacion ya no es obligatoria */}
                        </label>
                        {/* Pegatina (solo desplegable) */}
                        <label className="flex flex-col gap-1">
                            <span className="font-semibold text-sm">Pegatina</span>
                            <select className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="pegatina_id" value={pegatinaId} onChange={e => setPegatinaId(e.target.value)}>
                                <option value="">Selecciona pegatina</option>
                                {pegatinas.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
                            </select>
                        </label>
                        {/* Color */}
                        <input className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="color" placeholder="Color" />
                        {/* color ya no es obligatorio */}
                        {/* Fecha primera matriculación */}
                        <input className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="fecha_primera_matriculacion" placeholder="Fecha primera matriculación" type="date" />
                        {/* fecha_primera_matriculacion ya no es obligatoria */}
                        {/* Plazas */}
                        <input className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="plazas" placeholder="Plazas" type="number" min="1" />
                        {/* plazas ya no es obligatorio */}
                        {/* Kilómetros recorridos */}
                        <input className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="kilometros_recorridos" placeholder="Kilómetros recorridos" type="number" min="0" />
                        {/* kilometros ya no es obligatorio */}
                        {/* Última fecha ITV */}
                        <input className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="ultima_fecha_itv" placeholder="Última fecha ITV" type="date" />
                        {/* Matrícula */}
                        <input className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="matricula" placeholder="Matrícula" />
                        {/* matricula ya no es obligatoria */}
                        {/* Número bastidor */}
                        <input className="border border-primary/30 rounded-lg p-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" name="numero_bastidor" placeholder="Número bastidor" />
                        {/* numero_bastidor ya no es obligatorio */}
                        {/* Botones */}
                        <div className="col-span-1 md:col-span-2 flex gap-2 justify-end mt-2">
                            <button type="button" onClick={onClose} className="bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg px-5 py-2 font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">Cancelar</button>
                            <button type="submit" className="bg-primary text-white rounded-lg px-5 py-2 font-bold shadow-md hover:bg-primary/90 transition-all">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddVehicleModal;
