<!DOCTYPE html>

<html class="light" lang="es">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>AutoMaint - Landing Page and Pricing Plans</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet" />
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0f49bd",
                        "background-light": "#f6f6f8",
                        "background-dark": "#101622",
                    },
                    fontFamily: {
                        "display": ["Inter"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }

        .material-symbols-outlined {
            font-size: 24px;
        }
    </style>
</head>

<body
    class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200">
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <!-- Header / Navigation -->
        <header
            class="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-40 py-4">
            <div class="flex items-center justify-between max-w-[1280px] mx-auto">
                <div class="flex items-center gap-3">
                    <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span class="material-symbols-outlined">directions_car</span>
                    </div>
                    <h2 class="text-[#0d121b] dark:text-white text-xl font-bold tracking-tight">AutoMaint</h2>
                </div>
                <nav class="hidden md:flex flex-1 justify-center gap-10">
                    <a class="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
                        href="#features">{{__('landing.Nfeatures')}}</a>
                    <a class="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
                        href="#benefits">{{__('landing.Nbeneficts')}}</a>
                    <a class="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
                        href="#pricing">{{__('landing.Npricing')}}</a>
                </nav>
                <div class="flex gap-3">
                    <button
                        class="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold transition-all hover:bg-slate-200">
                        {{__('landing.Nlogin')}}
                    </button>
                    <button
                        class="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide transition-all hover:opacity-90 shadow-md shadow-primary/20">
                        {{__('landing.NgetStarted')}}
                    </button>
                </div>
            </div>
        </header>
        <main class="flex flex-col flex-1">
            <!-- Hero Section -->
            <section class="px-6 lg:px-40 py-16 lg:py-24">
                <div class="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div class="flex flex-col gap-8 flex-1 text-center lg:text-left">
                        <div class="flex flex-col gap-4">
                            <h1
                                class="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                                {{__('landing.Htittle')}}
                            </h1>
                            <p
                                class="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                                {{__('landing.Hdescription')}}
                            </p>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                class="flex h-14 px-8 items-center justify-center rounded-xl bg-primary text-white text-lg font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform">
                                {{__('landing.HstartFree')}}
                            </button>
                            <button
                                class="flex h-14 px-8 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                {{__('landing.Hdemo')}}
                            </button>
                        </div>
                        <div class="flex items-center justify-center lg:justify-start gap-4">
                            <div class="flex -space-x-2">
                                <div class="size-8 rounded-full border-2 border-white bg-slate-700"
                                    data-alt="Avatar of a satisfied user profile"
                                    style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQHYkavIonNzvixKKdshqCTwAptjkWHgoOaW7o3ejAt1N9MK_KjS0NrJi_EaftbDTSfIvWOwGrgPeUrnIuu9DimYgJh9bXi7y_NY_qwWLv02yB3YjWr7lwXt75pjt49jwzDiYs5Y9BqACdkDWQru-QA6KfgRJD7DHrRguSenyZjSt-BDbWGo5js_Yjm8cLiWlmw0S4N_IdPsN7NkjEHxmmE6cgggvZXkYNzib6qAl6-EAVxXLkSuuG6xZ9eMggIPRzp14kuTaOUnad')">
                                </div>
                                <div class="size-8 rounded-full border-2 border-white bg-slate-300"
                                    data-alt="Avatar of another active user"
                                    style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNCV15fQ967Yquo2E6K5ifWHBRaZC-95mnQNACWR2cixf2_MrZnmCstU4PlL3Zl9UQpEsaiinYqYG-PymAwtVll4xzcX_Xi9Q4cJQsiFPEkY7rJYg_wruKie28vyWXN0fuW3r4xDST9qSrGxVlVNqFnuMHtgUg3gu8ByfWFynUFoP2kCHDjvatfnBTzw8oD4ucDuVhCkbs2z3rJSjcjdd9MF_kDe3Q-IU3h7bCU0M6mdvfKQ-_fi7lusdY2vV63lFG9Cv1OhY0IR-P')">
                                </div>
                                <div class="size-8 rounded-full border-2 border-white bg-slate-400"
                                    data-alt="Third user avatar profile picture"
                                    style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBl7yzIujDu9Hy-W1rD0HmfhL1s7NdzuuBvG9J4I5MOUBq1Bh8Ru_MxsrkCYwCGGLfgMLZ2p-7d-FiU8C_F-XHt5MlYop6cUtdCkOm17Vev1HpUIdttK1EEzzsj5W-O83yRvojUGdmYs4-mQLr-rVeL8QB-JXF4-r5jylHAhnEvuvbvIz_FXogooY5MOoET5yZVOaIw7qUAGy1sFt_oJB2q7V4fPoh370YqtivQ3Rla8nlIVLdk821mzxr9iHQQ9iQXTggF3SK06Vr')">
                                </div>
                            </div>
                            <p class="text-sm text-slate-500 font-medium">
                                {{__('landing.Htext')}}
                            </p>
                        </div>
                    </div>
                    <div class="flex-1 w-full max-w-[600px]">
                        <div
                            class="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                            <img alt="SaaS Dashboard Mockup" class="w-full h-auto object-cover"
                                data-alt="Clean dashboard mockup of vehicle analytics platform"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4LuT0tuMJArQQL9kiKeu9bNcWMvrCuh-TSCtoNeAS4cENbbIe4NGv8o7fFb-posGnQU4NkouSIWe5LaGKprfcOGda6lcdT5U1HGwnKcTsy_VNr3HTORuEYHVteqNFkXA_biTl0LXClXE8T1zIc3xwdudqxokMNra4cGI3lNbDHIJX-7nsgdBBYIJv7LRVQ5u_Dx18qy935XCo0n9fhLnw7p9RowbrlH7AAZvhbXoembwv3t_MxdKxfM-W1VS1DGxYfKTtBLcLRDSV" />
                            <div class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Features Section -->
            <section class="bg-white dark:bg-slate-900/50 px-6 lg:px-40 py-20" id="features">
                <div class="max-w-[1280px] mx-auto">
                    <div class="text-center mb-16 flex flex-col items-center">
                        <span
                            class="text-primary font-bold tracking-widest text-xs uppercase mb-3">Funcionalidades</span>
                        <h2 class="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">Todo lo que
                            necesitas en un solo lugar</h2>
                        <p class="text-slate-600 dark:text-slate-400 max-w-[700px]">Optimizamos cada aspecto de la
                            gestión de tu vehículo para que tú solo te preocupes de conducir.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            class="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark hover:border-primary/30 hover:shadow-xl transition-all">
                            <div
                                class="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined">history</span>
                            </div>
                            <h3 class="text-xl font-bold mb-3 dark:text-white">History Tracking</h3>
                            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">Registro digital completo de
                                todas las reparaciones y servicios realizados. Olvídate del libro de mantenimiento
                                físico.</p>
                        </div>
                        <div
                            class="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark hover:border-primary/30 hover:shadow-xl transition-all">
                            <div
                                class="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined">notifications_active</span>
                            </div>
                            <h3 class="text-xl font-bold mb-3 dark:text-white">Smart Alerts</h3>
                            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">Recordatorios automáticos
                                basados en kilometraje o tiempo para cambios de aceite, neumáticos e inspecciones
                                técnicas (ITV).</p>
                        </div>
                        <div
                            class="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark hover:border-primary/30 hover:shadow-xl transition-all">
                            <div
                                class="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined">description</span>
                            </div>
                            <h3 class="text-xl font-bold mb-3 dark:text-white">Document Management</h3>
                            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">Almacena de forma segura
                                seguros, carnets y documentos técnicos. Accede a ellos desde cualquier lugar y
                                dispositivo.</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Why Choose Us Section -->
            <section class="px-6 lg:px-40 py-24" id="benefits">
                <div class="max-w-[1280px] mx-auto space-y-24">
                    <div class="flex flex-col lg:flex-row items-center gap-16">
                        <div class="flex-1 order-2 lg:order-1">
                            <div class="relative">
                                <img alt="Clean Auto Workshop"
                                    class="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                                    data-alt="Modern and clean professional car workshop interior"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfB8ruwaygWGVrZhNn-TIyMpz2FQInCVePS7PgkKzPNMtcCXO6zKLNOsrjtx3TgCm4izZt1T-FXpVcWRWgqYNXowQOCvG-v2bfLOaxbYSzdn7NJVekk5rOPIgrPXgq-UfpJs5KJlWqyniGFe_PtFH6xiDvJLW4OVVeXRPEM58r9Vv9ROUEfIR3SfUTIskvs5q21Y-IUSfESDlKliYtS4fxquAs57k5kJxax4SdyClwXPjncvXVuN9ho7LOeyD5ddl304NmekFERJFT" />
                                <div
                                    class="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl text-white shadow-xl hidden md:block">
                                    <p class="text-3xl font-black">+25%</p>
                                    <p class="text-xs uppercase font-bold tracking-widest opacity-80">Valor de reventa
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 space-y-6 order-1 lg:order-2">
                            <h2 class="text-4xl font-black dark:text-white">Maximiza el valor de tu inversión</h2>
                            <p class="text-slate-600 dark:text-slate-400 text-lg">Un vehículo bien mantenido no solo es
                                más seguro, sino que mantiene un valor de reventa significativamente mayor. Nuestro
                                historial certificado es la prueba definitiva de calidad para futuros compradores.</p>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3">
                                    <div
                                        class="size-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                        <span class="material-symbols-outlined !text-[16px]">check</span>
                                    </div>
                                    <span class="text-slate-700 dark:text-slate-300">Historial verificado con sellos
                                        digitales.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <div
                                        class="size-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                        <span class="material-symbols-outlined !text-[16px]">check</span>
                                    </div>
                                    <span class="text-slate-700 dark:text-slate-300">Seguridad garantizada para tu
                                        familia.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <div
                                        class="size-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                        <span class="material-symbols-outlined !text-[16px]">check</span>
                                    </div>
                                    <span class="text-slate-700 dark:text-slate-300">Menores costos de reparación a
                                        largo plazo.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Pricing Section -->
            <section class="bg-slate-100 dark:bg-slate-900 px-6 lg:px-40 py-24" id="pricing">
                <div class="max-w-[1280px] mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-black dark:text-white mb-4">Planes para todos los conductores</h2>
                        <p class="text-slate-600 dark:text-slate-400">Escoge el plan que mejor se adapte a tus
                            necesidades de movilidad.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Free Plan -->
                        <div
                            class="bg-white dark:bg-background-dark rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm">
                            <div class="mb-8">
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Free</h3>
                                <div class="flex items-baseline gap-1">
                                    <span class="text-4xl font-black dark:text-white">$0</span>
                                    <span class="text-slate-500 text-sm">/mes</span>
                                </div>
                                <p class="text-slate-500 text-sm mt-3">Para conductores ocasionales.</p>
                            </div>
                            <div class="flex-1 space-y-4 mb-8">
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">1 Vehículo</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Registro básico de
                                        historial</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Soporte por
                                        comunidad</span>
                                </div>
                            </div>
                            <button
                                class="w-full py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                Elegir Plan
                            </button>
                        </div>
                        <!-- Pro Plan -->
                        <div
                            class="bg-white dark:bg-background-dark rounded-3xl p-8 border-2 border-primary flex flex-col shadow-2xl shadow-primary/10 relative scale-105 z-10">
                            <div
                                class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                Recomendado
                            </div>
                            <div class="mb-8">
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Pro</h3>
                                <div class="flex items-baseline gap-1">
                                    <span class="text-4xl font-black dark:text-white">$12</span>
                                    <span class="text-slate-500 text-sm">/mes</span>
                                </div>
                                <p class="text-slate-500 text-sm mt-3">Para los que viven en la carretera.</p>
                            </div>
                            <div class="flex-1 space-y-4 mb-8">
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Hasta 3 Vehículos</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Alertas
                                        Inteligentes</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Nube para
                                        Documentos</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Soporte Prioritario</span>
                                </div>
                            </div>
                            <button
                                class="w-full py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                                Elegir Plan
                            </button>
                        </div>
                        <!-- Enterprise Plan -->
                        <div
                            class="bg-white dark:bg-background-dark rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm">
                            <div class="mb-8">
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Enterprise</h3>
                                <div class="flex items-baseline gap-1">
                                    <span class="text-4xl font-black dark:text-white">$49</span>
                                    <span class="text-slate-500 text-sm">/mes</span>
                                </div>
                                <p class="text-slate-500 text-sm mt-3">Gestión de flotas profesionales.</p>
                            </div>
                            <div class="flex-1 space-y-4 mb-8">
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Flota Ilimitada</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Acceso
                                        Multi-usuario</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Integración API</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary">check_circle</span>
                                    <span class="text-slate-700 dark:text-slate-300 text-sm">Account Manager
                                        dedicado</span>
                                </div>
                            </div>
                            <button
                                class="w-full py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                Contactar Ventas
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Newsletter/CTA Section -->
            <section class="px-6 lg:px-40 py-20 bg-primary">
                <div
                    class="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
                    <div class="flex flex-col gap-4 max-w-xl text-center lg:text-left">
                        <h2 class="text-3xl md:text-4xl font-black">¿Listo para tomar el control?</h2>
                        <p class="text-primary-100 opacity-90 text-lg">Únete a miles de conductores que ya han
                            simplificado el cuidado de sus vehículos.</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                        <input
                            class="h-14 px-6 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-full lg:w-[300px]"
                            placeholder="Tu email" type="email" />
                        <button
                            class="h-14 px-8 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all whitespace-nowrap">Comenzar
                            ahora</button>
                    </div>
                </div>
            </section>
        </main>
        <!-- Footer -->
        <footer class="bg-slate-950 text-slate-400 px-6 lg:px-40 py-16">
            <div class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div class="col-span-1 md:col-span-1 space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span class="material-symbols-outlined">directions_car</span>
                        </div>
                        <h2 class="text-white text-xl font-bold tracking-tight">AutoMaint</h2>
                    </div>
                    <p class="text-sm leading-relaxed">Software de gestión de mantenimiento vehicular inteligente para
                        conductores exigentes y flotas modernas.</p>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">Plataforma</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a class="hover:text-primary transition-colors" href="#">Características</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Seguridad</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">APP Móvil</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Versión PRO</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">Compañía</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a class="hover:text-primary transition-colors" href="#">Sobre nosotros</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Contacto</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Blog</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Prensa</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">Legal</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a class="hover:text-primary transition-colors" href="#">Términos de servicio</a>
                        </li>
                        <li><a class="hover:text-primary transition-colors" href="#">Privacidad</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
            <div
                class="max-w-[1280px] mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
                <p>© 2024 AutoMaint Technologies Inc. Todos los derechos reservados.</p>
                <div class="flex gap-6">
                    <a class="hover:text-white transition-colors" href="#">Twitter</a>
                    <a class="hover:text-white transition-colors" href="#">LinkedIn</a>
                    <a class="hover:text-white transition-colors" href="#">Instagram</a>
                </div>
            </div>
        </footer>
    </div>
</body>

</html>
