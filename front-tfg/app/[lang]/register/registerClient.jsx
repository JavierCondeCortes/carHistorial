"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterClient({ dict, lang }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    // FUNCIÓN PARA GUARDAR EL TOKEN (Indispensable para mantener la sesión)
    const setTokenCookie = (token) => {
        const date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = `auth_token=${token}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors(null);

        try {
            // Cambiamos a localhost para evitar el ERR_BLOCKED_BY_CLIENT del navegador
            const response = await fetch(`http://localhost:8000/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Si Laravel devuelve el token, lo guardamos antes de redirigir
                if (data.access_token) {
                    setTokenCookie(data.access_token);
                }
                router.push(`/${lang}/dashboard`);
            } else {
                // Manejo de errores de validación de Laravel 12
                setErrors(data.errors || { message: data.message || "Error en el registro" });
            }
        } catch (error) {
            // Si el error persiste, es probable que el AdBlock bloquee la palabra "register"
            setErrors({ message: "Error: No se pudo conectar con el servidor. Si usas AdBlock, desactívalo para esta web." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white">

            <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 w-full z-10">
                <div className="flex items-center gap-3">
                    <div onClick={() => router.push(`/${lang}/home`)} className='flex items-center cursor-pointer'>
                        <div className="text-primary w-8 h-8 flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">directions_car</span>
                        </div>
                        <h2 className="text-lg font-bold">CarHistorial</h2>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-sm text-slate-500">{dict.auth.already_have_account}</span>
                    <button onClick={() => router.push(`/${lang}/login`)} className="rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                        {dict.auth.login_button}
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                <aside className="hidden lg:flex lg:w-[40%] flex-col justify-center bg-slate-50 dark:bg-slate-900/50 p-20 border-r border-slate-200 dark:border-slate-800">
                    <div className="max-w-md space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                                <span className="material-symbols-outlined text-primary">Analytics</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-base">{dict.register.benefit1_title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{dict.register.benefit1_desc}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                                <span className="material-symbols-outlined text-primary">Cloud</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-base">{dict.register.benefit3_title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{dict.register.benefit3_desc}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                                <span className="material-symbols-outlined text-primary">Notifications_active</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-base">{dict.register.benefit5_title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{dict.register.benefit5_desc}</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="flex-1 flex items-center justify-center p-6 bg-background-light dark:bg-background-dark overflow-y-auto">
                    <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold mb-2">{dict.register.title}</h1>
                                <p className="text-slate-500">{dict.register.subtitle}</p>
                            </div>

                            {errors?.message && (
                                <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm font-bold border border-red-200">
                                    {errors.message}
                                </div>
                            )}

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium">{dict.register.label_name}</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                                        <input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={`block w-full h-12 pl-10 pr-4 bg-slate-50 dark:bg-slate-800 border ${errors?.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-lg focus:border-primary outline-none transition-all`}
                                            placeholder={dict.register.placeholder_name}
                                            type="text"
                                        />
                                    </div>
                                    {errors?.name && <span className="text-xs text-red-500">{errors.name[0]}</span>}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium">{dict.register.label_email}</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                                        <input
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={`block w-full h-12 pl-10 pr-4 bg-slate-50 dark:bg-slate-800 border ${errors?.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-lg focus:border-primary outline-none transition-all`}
                                            placeholder={dict.register.placeholder_email}
                                            type="email"
                                        />
                                    </div>
                                    {errors?.email && <span className="text-xs text-red-500">{errors.email[0]}</span>}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium">{dict.register.placeholder_password}</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                                        <input
                                            required
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className={`block w-full h-12 pl-10 pr-4 bg-slate-50 dark:bg-slate-800 border ${errors?.password ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-lg focus:border-primary outline-none transition-all`}
                                            placeholder="••••••••"
                                            type="password"
                                        />
                                    </div>
                                    {errors?.password && <span className="text-xs text-red-500">{errors.password[0]}</span>}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium">{dict.register.placeholder_repeat_password}</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">enhanced_encryption</span>
                                        <input
                                            required
                                            value={formData.password_confirmation}
                                            onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                                            className="block w-full h-12 pl-10 pr-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-primary outline-none transition-all"
                                            placeholder="••••••••"
                                            type="password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 py-1">
                                    <input required className="mt-1 h-4 w-4 rounded border-slate-300 text-primary cursor-pointer" id="terms" type="checkbox" />
                                    <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="terms">
                                        {dict.register.terms_text} <a className="text-primary font-bold hover:underline" href="#">{dict.register.terms_link}</a>.
                                    </label>
                                </div>

                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 px-4 rounded-lg hover:bg-primary/90 shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
                                >
                                    <span>{loading ? "Registrando..." : dict.register.submit_button}</span>
                                    {!loading && <span className="material-symbols-outlined text-lg">arrow_forward</span>}
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>

            <footer className="py-6 px-10 flex flex-col md:flex-row items-center justify-between border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 text-[11px] font-bold uppercase tracking-wider gap-4">
                <div className="flex items-center gap-6">
                    <span>© 2026 CarHistorial Inc.</span>
                </div>
            </footer>
        </div>
    );
}