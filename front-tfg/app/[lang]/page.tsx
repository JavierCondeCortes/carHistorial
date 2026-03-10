"use client";

import React from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
const router = useRouter();

  // Esta es la función que se activa al pulsar
  const register = () => {
    console.log("Navegando...");
    router.push("/register");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header con Backdrop blur */}
      <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#101622]/80 backdrop-blur-md px-6 lg:px-40 py-4">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-[#0f49bd] rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <h2 className="text-[#0d121b] dark:text-white text-xl font-bold tracking-tight">AutoMaint</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-center gap-10">
            <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-[#0f49bd] transition-colors" href="#features">Features</a>
            <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-[#0f49bd] transition-colors" href="#benefits">Benefits</a>
            <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-[#0f49bd] transition-colors" href="#pricing">Pricing</a>
          </nav>
          <div className="flex gap-3">
            <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold transition-all hover:bg-slate-200">
              Login
            </button>
            <button
            onClick={register} 
            className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#0f49bd] text-white text-sm font-bold tracking-wide transition-all hover:opacity-90 shadow-md shadow-[#0f49bd]/20">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col flex-1">
        {/* Hero Section */}
        <section className="px-6 lg:px-40 py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex flex-col gap-8 flex-1 text-center lg:text-left">
              <div className="flex flex-col gap-4">
                <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                  Mantén tu vehículo siempre a punto
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                  La plataforma integral para el seguimiento de mantenimiento, alertas inteligentes y gestión documental de tu flota o vehículo personal.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="flex h-14 px-8 items-center justify-center rounded-xl bg-[#0f49bd] text-white text-lg font-bold shadow-lg shadow-[#0f49bd]/25 hover:scale-[1.02] transition-transform">
                  Empieza Gratis ahora
                </button>
                <button className="flex h-14 px-8 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  Ver Demo
                </button>
              </div>

              {/* Social Proof Avatars */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="size-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                      style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=${i}')` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">+2,000 conductores ya confían en nosotros</p>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="flex-1 w-full max-w-[600px]">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                <img
                  alt="SaaS Dashboard Mockup"
                  className="w-full h-auto object-cover"
                  src="https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80&w=1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f49bd]/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white dark:bg-slate-900/50 px-6 lg:px-40 py-20" id="features">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16 flex flex-col items-center">
              <span className="text-[#0f49bd] font-bold tracking-widest text-xs uppercase mb-3">Funcionalidades</span>
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitas en un solo lugar</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-[700px]">Optimizamos cada aspecto de la gestión de tu vehículo para que tú solo te preocupes de conducir.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'history', title: 'History Tracking', desc: 'Registro digital completo de todas las reparaciones y servicios.' },
                { icon: 'notifications_active', title: 'Smart Alerts', desc: 'Recordatorios automáticos basados en kilometraje o tiempo.' },
                { icon: 'description', title: 'Document Management', desc: 'Almacena seguros, carnets y documentos técnicos de forma segura.' }
              ].map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101622] hover:border-[#0f49bd]/30 hover:shadow-xl transition-all">
                  <div className="size-14 rounded-xl bg-[#0f49bd]/10 text-[#0f49bd] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-40 py-20 bg-[#0f49bd]">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
            <div className="flex flex-col gap-4 max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black">¿Listo para tomar el control?</h2>
              <p className="opacity-90 text-lg">Únete a miles de conductores que ya han simplificado el cuidado de sus vehículos.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                className="h-14 px-6 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-full lg:w-[300px]"
                placeholder="Tu email"
                type="email"
              />
              <button className="h-14 px-8 bg-white text-[#0f49bd] font-bold rounded-xl hover:bg-slate-100 transition-all whitespace-nowrap">
                Comenzar ahora
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simple */}
      <footer className="bg-slate-950 text-slate-400 px-6 lg:px-40 py-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-[#0f49bd] rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">directions_car</span>
            </div>
            <span className="text-white font-bold">AutoMaint</span>
          </div>
          <p>© 2026 AutoMaint Technologies Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}