import React, { useState, useEffect } from 'react';
import AlertItem from './AlertItem';

const AddVehicleModal = ({ isOpen, onClose, onSubmit, modelos = [], motorizaciones = [], pegatinas = [], tiposCombustible = [] }) => {
    // 1. Iniciamos el estado basado en si está abierto o no
    const [visible, setVisible] = useState(isOpen);
    
    // Estados para los selectores con búsqueda
    const [marcas, setMarcas] = useState([]);
    const [marcaInput, setMarcaInput] = useState('');
    const [marcaId, setMarcaId] = useState('');
    const [showMarcaList, setShowMarcaList] = useState(false);

    const [modeloInput, setModeloInput] = useState('');
    const [modeloId, setModeloId] = useState('');
    const [showModeloList, setShowModeloList] = useState(false);

    // Estado para errores
    const [formError, setFormError] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});

    useEffect(() => {
        let timer;
        if (isOpen) {
            // CARGA DE DATOS
            fetch('http://localhost:8000/api/marcas')
                .then(res => res.json())
                .then(data => setMarcas(data))
                .catch(() => setMarcas([]));

            // SOLUCIÓN AL ERROR: Usamos un pequeño delay para evitar el "cascading render"
            timer = setTimeout(() => setVisible(true), 10);
        } else {
            // Animación de salida: esperamos 300ms (duración de la transición) antes de desmontar
            timer = setTimeout(() => {
                setVisible(false);
                // Limpiar formulario al terminar la animación de cierre
                setMarcaInput('');
                setMarcaId('');
                setModeloInput('');
                setModeloId('');
                setFieldErrors({});
                setFormError(null);
            }, 300);
        }

        return () => clearTimeout(timer);
    }, [isOpen]);

    // Renderizado condicional: si no está abierto ni es visible (animación), no renderizamos
    if (!visible && !isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(null);
        
        const newFieldErrors = {};
        if (!marcaId) newFieldErrors.marca = 'Selecciona una marca de la lista';
        if (!modeloId) newFieldErrors.modelo = 'Selecciona un modelo de la lista';
        
        setFieldErrors(newFieldErrors);

        if (Object.keys(newFieldErrors).length > 0) {
            setFormError('Marca y Modelo son obligatorios.');
            return;
        }

        onSubmit(e); 
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 w-full max-w-6xl border border-primary/30 transition-all duration-300 flex ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                
                {/* Columna izquierda: imagen */}
                <div className="hidden md:flex flex-col items-center justify-center w-1/3 pr-8">
                    <div className="w-full h-full max-h-[500px] rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-primary/20">
                        <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800" alt="Vehículo" className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Columna derecha: formulario */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-black mb-6 text-primary uppercase tracking-tight">Registrar Vehículo</h2>
                    
                    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {formError && (
                            <div className="col-span-full">
                                <AlertItem type="error" message={formError} />
                            </div>
                        )}

                        {/* MARCA */}
                        <div className="flex flex-col gap-1 relative">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Marca *</span>
                            <input
                                className={`border rounded-lg p-2.5 text-sm outline-none transition-all ${fieldErrors.marca ? 'border-red-500' : 'border-primary/30 focus:border-primary'}`}
                                placeholder="Buscar marca..."
                                value={marcaInput}
                                onFocus={() => setShowMarcaList(true)}
                                onBlur={() => setTimeout(() => setShowMarcaList(false), 200)}
                                onChange={e => { setMarcaInput(e.target.value); setMarcaId(''); }}
                            />
                            {showMarcaList && (
                                <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-800 border shadow-2xl z-50 max-h-40 overflow-y-auto rounded-b-lg">
                                    {marcas.filter(m => m.nombre.toLowerCase().includes(marcaInput.toLowerCase())).map(m => (
                                        <div key={m.id} className="p-2 hover:bg-primary/10 cursor-pointer text-sm" onMouseDown={() => { setMarcaId(m.id); setMarcaInput(m.nombre); }}>
                                            {m.nombre}
                                        </div>
                                    ))}
                                </div>
                            )}
                            <input type="hidden" name="marca_id" value={marcaId} />
                        </div>

                        {/* MODELO */}
                        <div className="flex flex-col gap-1 relative">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Modelo *</span>
                            <input
                                className={`border rounded-lg p-2.5 text-sm outline-none transition-all ${!marcaId ? 'bg-slate-50 cursor-not-allowed opacity-50' : ''} ${fieldErrors.modelo ? 'border-red-500' : 'border-primary/30 focus:border-primary'}`}
                                placeholder={marcaId ? "Buscar modelo..." : "Selecciona marca primero"}
                                value={modeloInput}
                                disabled={!marcaId}
                                onFocus={() => setShowModeloList(true)}
                                onBlur={() => setTimeout(() => setShowModeloList(false), 200)}
                                onChange={e => { setModeloInput(e.target.value); setModeloId(''); }}
                            />
                            {showModeloList && marcaId && (
                                <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-800 border shadow-2xl z-50 max-h-40 overflow-y-auto rounded-b-lg">
                                    {modelos
                                        .filter(m => m.marca_id === Number(marcaId) && m.nombre.toLowerCase().includes(modeloInput.toLowerCase()))
                                        .map(m => (
                                            <div key={m.id} className="p-2 hover:bg-primary/10 cursor-pointer text-sm" onMouseDown={() => { setModeloId(m.id); setModeloInput(m.nombre); }}>
                                                {m.nombre}
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                            <input type="hidden" name="modelo_id" value={modeloId} />
                        </div>

                        {/* COMBUSTIBLE */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Combustible</span>
                            <select name="tipo_combustible_id" className="border border-primary/30 rounded-lg p-2.5 text-sm">
                                <option value="">Seleccionar...</option>
                                {tiposCombustible.map(t => <option key={t.id} value={t.id}>{t.nombre}</option>)}
                            </select>
                        </div>

                        {/* MOTORIZACIÓN */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Motorización</span>
                            <select name="motorizacion" className="border border-primary/30 rounded-lg p-2.5 text-sm">
                                <option value="">Seleccionar...</option>
                                {motorizaciones.map(m => <option key={m.id} value={m.id}>{m.nombre}</option>)}
                            </select>
                        </div>

                        {/* PEGATINA */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Pegatina</span>
                            <select name="pegatina_id" className="border border-primary/30 rounded-lg p-2.5 text-sm">
                                <option value="">Seleccionar...</option>
                                {pegatinas.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
                            </select>
                        </div>

                        {/* COLOR */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Color</span>
                            <input name="color" className="border border-primary/30 rounded-lg p-2.5 text-sm" placeholder="Ej: Blanco" />
                        </div>

                        {/* FECHA MATRICULACION */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Matriculación</span>
                            <input name="fecha_primera_matriculacion" type="date" className="border border-primary/30 rounded-lg p-2.5 text-sm" />
                        </div>

                        {/* PLAZAS */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Plazas</span>
                            <input name="plazas" type="number" className="border border-primary/30 rounded-lg p-2.5 text-sm" placeholder="5" />
                        </div>

                        {/* KM */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Kilómetros</span>
                            <input name="kilometros_recorridos" type="number" className="border border-primary/30 rounded-lg p-2.5 text-sm" placeholder="0" />
                        </div>

                        {/* MATRÍCULA */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Matrícula</span>
                            <input name="matricula" className="border border-primary/30 rounded-lg p-2.5 text-sm" placeholder="1234ABC" />
                        </div>

                        {/* BASTIDOR */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-[10px] uppercase text-slate-400">Nº Bastidor</span>
                            <input name="numero_bastidor" className="border border-primary/30 rounded-lg p-2.5 text-sm" placeholder="VIN..." />
                        </div>

                        {/* BOTONES */}
                        <div className="col-span-full flex gap-3 justify-end mt-6">
                            <button type="button" onClick={onClose} className="px-6 py-2 text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors uppercase">
                                Cancelar
                            </button>
                            <button type="submit" className="bg-primary text-white px-10 py-2 rounded-lg font-black text-sm shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all uppercase">
                                Guardar Vehículo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddVehicleModal;