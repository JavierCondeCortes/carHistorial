"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const params = useParams();
    
    // Detectamos el idioma de la URL o por defecto 'es'
    const lang = params?.lang || 'es';

    useEffect(() => {
        const savedUser = localStorage.getItem('user_session');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error("Error al cargar sesión:", error);
                localStorage.removeItem('user_session');
            }
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user_session', JSON.stringify(userData));
        // Redirige automáticamente al dashboard del idioma actual
        router.push(`/${lang}/dashboard`);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user_session');
        router.push(`/${lang}/login`);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
};