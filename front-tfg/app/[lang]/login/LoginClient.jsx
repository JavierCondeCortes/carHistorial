"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext'; // Importante para la seguridad

export default function LoginClient({ dict, lang }) {
    const router = useRouter();
    const { login } = useAuth(); // Extraemos la función global de sesión

    // --- Estados del Formulario ---
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // --- Lógica de Autenticación ---
    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            // Llamada a tu API de Laravel/Docker
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Preparamos el objeto de usuario con el token incluido
                const userData = {
                    ...data.user,
                    token: data.token,
                    remember: rememberMe // Pasamos el preferecia de guardado
                };

                // ESTA ES LA CLAVE: 
                // La función login del context guarda en localStorage y actualiza el estado global
                login(userData); 
                
                // Nota: No hace falta router.push aquí porque AuthContext ya lo hace internamente
            } else {
                setError(data.message || dict.login.error_auth || "Credenciales incorrectas");
            }
        } catch (err) {
            setError("Error de conexión: Verifica que tu Docker/Laravel esté encendido.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 w-full">
                <div className="flex items-center gap-3">
                    <div onClick={() => router.push(`/${lang}/home`)} className='flex items-center cursor-pointer'>
                        <div className="text-primary w-8 h-8 flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl text-blue-600">directions_car</span>
                        </div>
                        <h2 className="text-lg font-bold">CarHistorial</h2>
                    </div>
                </div>
                <button 
                    onClick={() => router.push(`/${lang}/register`)}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors"
                >
                    <span className="truncate">{dict.auth?.register_button || "Registrarse"}</span>
                </button>
            </header>

            <main className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-[440px] bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8 md:p-10">
                        <div className="text-center mb-8">
                            <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight mb-2">{dict.login.title}</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base">{dict.login.subtitle}</p>
                        </div>

                        {error && (
                            <div className="mb-6 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">error</span>
                                {error}
                            </div>
                        )}

                        <div className="space-y-5">
                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-medium">{dict.login.label_email}</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                                    <input
                                        required
                                        className="block w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 dark:text-white transition-all outline-none"
                                        placeholder={dict.login.placeholder_email}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-medium">{dict.login.label_password}</label>
                                <div className="relative flex items-center">
                                    <span className="material-symbols-outlined absolute left-3 text-slate-400 text-xl">lock</span>
                                    <input
                                        required
                                        className="block w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 dark:text-white transition-all outline-none"
                                        placeholder={dict.login.placeholder_password}
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 text-slate-400 hover:text-slate-600"
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Botón Remember Me */}
                            <div className="flex items-center justify-between py-1">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" 
                                        type="checkbox" 
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                                        {dict.login.remember_me}
                                    </span>
                                </label>
                                <a className="text-sm font-semibold text-blue-600 hover:underline" href="#">{dict.forgot_password || "¿Olvidaste tu contraseña?"}</a>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-70"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    dict.login.submit_button
                                )}
                            </button>
                        </div>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-slate-900 px-3 text-slate-500">{dict.login.divider || "O continuar con"}</span>
                            </div>
                        </div>

                        <button type="button" className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            Google
                        </button>
                    </form>

                    <div className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 p-6 text-center">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {dict.login.no_account}
                            <button
                                onClick={() => router.push(`/${lang}/register`)}
                                className="ml-1 font-bold text-blue-600 hover:underline"
                            >
                                {dict.login.signup_link}
                            </button>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="py-6 px-10 flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs gap-4">
                <div className="flex items-center gap-6">
                    <span>© 2026 CarHistorial.</span>
                    <a className="hover:text-slate-600" href="#">{dict.footer?.privacy || "Privacidad"}</a>
                    <a className="hover:text-slate-600" href="#">{dict.footer?.terms || "Términos"}</a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">language</span>
                    <span>{lang === 'es' ? 'Español' : 'English'}</span>
                </div>
            </footer>
        </div>
    );
}