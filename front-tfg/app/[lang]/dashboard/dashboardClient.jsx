"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/useTranslation';
import Sidebar from '@/components/Sidebar';
import MobileHeader from '@/components/MobileHeader';
import MobileMenuOverlay from '@/components/MobileMenuOverlay';

export default function DashboardClient({ dict, lang }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const t = useTranslation(dict);

    const userProfile = (
        <div className="flex items-center gap-3 px-2">
            <div className="bg-slate-200 dark:bg-slate-700 size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/150?u=5')" }}></div>
            <div className="flex flex-col">
                <p className="text-slate-900 dark:text-white text-sm font-semibold">Alex Thompson</p>
                <p className="text-slate-500 text-xs">{t('dashboard.sidebar.role', 'Fleet Manager')}</p>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <Sidebar 
                lang={lang}
                router={router}
                activePage="dashboard"
                t={t}
                userProfile={userProfile}
            />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <MobileHeader 
                    onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    isMenuOpen={isMobileMenuOpen}
                />

                <main className="flex-1 overflow-y-auto scroll-smooth p-4 lg:p-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
                            <div>
                                <h2 className="text-slate-900 dark:text-white text-2xl lg:text-3xl font-black tracking-tight">{t('dashboard.header.title', 'Fleet Overview')}</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t('dashboard.header.subtitle', 'Real-time status and health across 42 vehicles')}</p>
                            </div>
                            <div className="flex gap-2 lg:gap-3">
                                <button className="flex-1 lg:flex-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold py-2 px-4 rounded-lg text-xs lg:text-sm flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">calendar_today</span> {t('dashboard.filters.30days', '30 Days')}
                                </button>
                                <button className="flex-1 lg:flex-none bg-primary text-white font-bold py-2 px-4 rounded-lg text-xs lg:text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-sm">download</span> {t('dashboard.actions.export', 'Export')}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold">{t('dashboard.alerts.title', 'Active Alerts')}</h3>
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-600">{t('dashboard.alerts.critical', '4 Critical')}</span>
                                </div>
                                <div className="space-y-3">
                                    <AlertItem type="warning" title={t('dashboard.alerts.brake', 'Brake Service Overdue')} subtitle="Vehicle #1042 • Van" />
                                    <AlertItem type="error" title={t('dashboard.alerts.engine', 'Engine Malfunction')} subtitle="Vehicle #2201 • Tesla" />
                                </div>
                                <button className="w-full mt-4 text-primary text-xs font-bold flex items-center justify-center gap-1 hover:underline">
                                    {t('dashboard.alerts.view_all', 'View All')} <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                </button>
                            </div>

                            <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                                <div className="flex justify-between mb-6">
                                    <h3 className="font-bold">{t('dashboard.expenses.title', 'Monthly Expenses')}</h3>
                                    <div className="text-right">
                                        <p className="text-xl font-black">$12,840</p>
                                        <p className="text-emerald-500 text-[10px] font-bold">{t('dashboard.expenses.trend', '+12% vs last month')}</p>
                                    </div>
                                </div>
                                <ChartPlaceholder />
                            </div>

                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold mb-6">{t('dashboard.distribution.title', 'Vehicle Distribution')}</h3>
                                <div className="flex flex-col items-center">
                                    <DonutChart value={42} label={t('dashboard.distribution.total', 'Total')} />
                                    <div className="w-full space-y-2 mt-4">
                                        <StatRow color="bg-emerald-500" label={t('dashboard.distribution.active', 'Active')} value="32 (75%)" />
                                        <StatRow color="bg-amber-400" label={t('dashboard.distribution.service', 'In Service')} value="6 (15%)" />
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold mb-6">{t('dashboard.activity.title', 'Recent Activity')}</h3>
                                <div className="space-y-6">
                                    <ActivityItem icon="build" color="text-blue-600" title={t('dashboard.activity.service', 'Service Completed')} desc="Brake pads replaced for #1042" time="Today at 11:42 AM" />
                                    <ActivityItem icon="check_circle" color="text-emerald-600" title={t('dashboard.activity.returned', 'Returned to Active')} desc="#2201 back on road" time="Yesterday at 4:30 PM" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <MiniStat icon="speed" label={t('dashboard.stats.mileage', 'Avg. Mileage')} value="1,240 km" />
                            <MiniStat icon="health_metrics" label={t('dashboard.stats.health', 'Health Score')} value="88%" />
                            <MiniStat icon="description" label={t('dashboard.stats.docs', 'Renewal Docs')} value={t('dashboard.stats.pending', '2 Pending')} amber />
                            <MiniStat icon="people" label={t('dashboard.stats.drivers', 'Active Drivers')} value="38" />
                        </div>
                    </div>
                </main>
            </div>
            <MobileMenuOverlay 
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                lang={lang}
                router={router}
                activePage="dashboard"
                t={t}
            />
        </div>
    );
}

// --- SUB-COMPONENTES AUXILIARES ---
// AlertItem, MiniStat, StatRow, ActivityItem, ChartPlaceholder, DonutChart permanecen igual

function AlertItem({ type, title, subtitle }) {
    const colors = type === 'warning' ? 'bg-amber-50 dark:bg-amber-900/10 border-amber-100' : 'bg-red-50 dark:bg-red-900/10 border-red-100';
    const iconColor = type === 'warning' ? 'text-amber-500' : 'text-red-500';
    return (
        <div className={`flex items-start gap-3 p-3 rounded-lg border ${colors}`}>
            <span className={`material-symbols-outlined ${iconColor}`}>
                {type === 'warning' ? 'warning' : 'error'}
            </span>
            <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-[10px] text-slate-500">{subtitle}</p>
            </div>
        </div>
    );
}

function MiniStat({ icon, label, value, amber = false }) {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <div className="bg-slate-100 dark:bg-slate-800 size-8 lg:size-10 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
                <span className="material-symbols-outlined text-base lg:text-xl">{icon}</span>
            </div>
            <div>
                <p className="text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase">{label}</p>
                <p className={`text-sm lg:text-lg font-bold ${amber ? 'text-amber-500' : ''}`}>{value}</p>
            </div>
        </div>
    );
}

function StatRow({ color, label, value }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className={`size-2 rounded-full ${color}`}></div>
                <span className="text-xs text-slate-500">{label}</span>
            </div>
            <span className="text-xs font-bold">{value}</span>
        </div>
    );
}

function ActivityItem({ icon, color, title, desc, time }) {
    return (
        <div className="flex gap-4">
            <div className={`size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0`}>
                <span className={`material-symbols-outlined ${color} text-base`}>{icon}</span>
            </div>
            <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-slate-500">{desc}</p>
                <span className="text-[10px] text-slate-400">{time}</span>
            </div>
        </div>
    );
}

function ChartPlaceholder() {
    return (
        <div className="h-[150px] w-full relative">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 200">
                <path d="M 0 160 Q 40 140 80 150 T 160 100 T 240 130 T 320 80 T 400 40" fill="none" stroke="#135bec" strokeWidth="3" />
            </svg>
        </div>
    );
}

function DonutChart({ value, label }) {
    return (
        <div className="relative size-32 lg:size-40">
            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                <circle className="text-emerald-500" cx="18" cy="18" fill="transparent" r="15.9" stroke="currentColor" strokeDasharray="75 100" strokeWidth="4"></circle>
                <circle className="text-amber-400" cx="18" cy="18" fill="transparent" r="15.9" stroke="currentColor" strokeDasharray="15 100" strokeDashoffset="-75" strokeWidth="4"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black">{value}</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">{label}</span>
            </div>
        </div>
    );
}