'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

/**
 * Componente NavItem reutilizable
 * Se define fuera del componente principal para mejorar el rendimiento y claridad.
 */
const NavItem = ({ icon, label, active = false, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
            active
                ? 'bg-primary/10 text-primary font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium'
        }`}
    >
        <span className={`material-symbols-outlined ${active ? 'material-symbols-fill' : ''}`}>
            {icon}
        </span>
        <span className="text-sm">{label}</span>
    </button>
);

export default function VehiclesClient({ dict }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const params = useParams();
    
    // Obtenemos el idioma actual de los parámetros de la URL (ej: /es/dashboard -> es)
    const lang = params?.lang || 'en';

    // Función de traducción con soporte para objetos anidados
    const t = (path, fallback) => {
        const keys = path.split('.');
        let result = dict;
        for (const key of keys) {
            if (!result || result[key] === undefined) return fallback;
            result = result[key];
        }
        return result;
    };

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">

            {/* --- SIDEBAR (Escritorio) --- */}
            <aside className="hidden lg:flex w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col justify-between p-4 shrink-0">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 px-2">
                        <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">directions_car</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-base font-bold leading-none">CarHistorial</h1>
                            <p className="text-slate-500 text-xs font-normal">{t('dashboard.sidebar.sub', 'Manage & Track')}</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-1">
                        <NavItem 
                            onClick={() => router.push(`/${lang}/dashboard`)} 
                            icon="dashboard" 
                            label={t('dashboard.menu.dashboard', 'Dashboard')} 
                        />
                        <NavItem 
                            onClick={() => router.push(`/${lang}/dashboard/history`)}
                            icon="history" 
                            label={t('dashboard.menu.history', 'Service History')} 
                        />
                        <NavItem 
                        onClick={() => router.push(`/${lang}/dashboard/vehicles`)}
                            icon="garage" 
                            label={t('dashboard.menu.vehicles', 'Vehicles')} 
                            active
                        />
                        <NavItem
                        onClick={() => router.push(`/${lang}/dashboard/documents`)}
                            icon="description" 
                            label={t('dashboard.menu.docs', 'Documents')}
                        />
                        <NavItem 
                            icon="settings" 
                            label={t('dashboard.menu.settings', 'Settings')} 
                        />
                    </nav>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 px-2">
                        <div className="bg-slate-200 dark:bg-slate-700 size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/150?u=5')" }}></div>
                        <div className="flex flex-col">
                            <p className="text-slate-900 dark:text-white text-sm font-semibold">Alex Thompson</p>
                            <p className="text-slate-500 text-xs">{t('dashboard.sidebar.role', 'Fleet Manager')}</p>
                        </div>
                    </div>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 rounded-lg text-sm transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">add</span> 
                        {t('dashboard.actions.add', 'Add Vehicle')}
                    </button>
                </div>
            </aside>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                {/* HEADER MÓVIL */}
                <header className="flex lg:hidden items-center justify-between px-4 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary size-8 rounded flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-xl">directions_car</span>
                        </div>
                    <span className="font-black text-lg tracking-tight">CarHistorial</span>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-slate-600 dark:text-slate-400 p-1 active:bg-slate-100 dark:active:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto scroll-smooth">
                    <div className="max-w-7xl mx-auto p-4 md:p-8">

                        {/* TÍTULO Y BOTÓN AÑADIR */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8">
                            <div className="flex flex-col gap-1 md:gap-2">
                                <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-black tracking-tight">
                                    {t('vehicles.title', 'Vehicle Fleet')}
                                </h2>
                                <p className="text-xs md:text-sm text-slate-500 font-medium">
                                    {t('vehicles.subtitle', 'Overview of all registered vehicles.')}
                                </p>
                            </div>
                            <div className="flex items-center justify-between md:justify-end gap-3">
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2 px-3 py-1.5 rounded-lg">
                                    <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">{t('vehicles.total_label', 'Total:')}</span>
                                    <span className="text-xs md:text-sm font-black text-primary">24</span>
                                </div>
                                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 md:py-2.5 px-4 md:px-6 rounded-lg text-xs md:text-sm transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">add</span>
                                    {t('vehicles.add_btn', 'Add New')}
                                </button>
                            </div>
                        </div>

                        {/* BARRA DE BÚSQUEDA */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm mb-6 md:mb-8 overflow-hidden">
                            <div className="p-3 md:p-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                                <div className="w-full md:flex-1">
                                    <label className="flex items-center w-full bg-slate-100 dark:bg-slate-800 px-3 md:px-4 rounded-lg focus-within:ring-2 ring-primary/20 transition-all">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
                                        <input 
                                            className="bg-transparent border-none focus:ring-0 text-xs md:text-sm w-full py-2 md:py-2.5 placeholder:text-slate-500" 
                                            placeholder={t('vehicles.search_placeholder', 'Search...')} 
                                            type="text" 
                                        />
                                    </label>
                                </div>
                                <div className="flex w-full md:w-auto gap-2">
                                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider transition-colors hover:bg-slate-200">
                                        <span className="material-symbols-outlined text-sm">tune</span>
                                        {t('vehicles.filters', 'Filters')}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* GRID DE VEHÍCULOS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {/* Ejemplo de Tarjeta de Vehículo */}
                            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm border-b-4 border-b-primary">
                                <div className="relative h-44 md:h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                    <img alt="Tesla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800" />
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-sm backdrop-blur-sm">Active</span>
                                    </div>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4">2021 Tesla Model 3</h3>
                                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase">{t('vehicles.stats.mileage', 'Mileage')}</span>
                                            <span className="text-sm font-bold">42,500 km</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase">{t('vehicles.stats.last_service', 'Last Service')}</span>
                                            <span className="text-sm font-bold">Aug 12, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botón Añadir Nuevo */}
                            <button className="group border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-all text-slate-400 hover:text-primary min-h-[250px]">
                                <span className="material-symbols-outlined text-4xl">add_circle</span>
                                <p className="font-bold">{t('vehicles.add_btn', 'Add New Vehicle')}</p>
                            </button>
                        </div>
                    </div>
                </main>
            </div>

            {/* --- MENÚ LATERAL MÓVIL --- */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-900 p-6 shadow-xl animate-in slide-in-from-right duration-300">
                        <div className="flex flex-col gap-8">
                            <button onClick={() => setIsMenuOpen(false)} className="self-end p-2"><span className="material-symbols-outlined">close</span></button>
                            <nav className="flex flex-col gap-3">
                                <NavItem 
                                    onClick={() => { router.push(`/${lang}/dashboard`); setIsMenuOpen(false); }} 
                                    icon="dashboard" 
                                    label={t('dashboard.menu.dashboard', 'Dashboard')} 
                                />
                                <NavItem icon="garage" label={t('dashboard.menu.vehicles', 'Vehicles')} active />
                                <NavItem icon="settings" label={t('dashboard.menu.settings', 'Settings')} />
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}