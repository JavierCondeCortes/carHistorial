<!DOCTYPE html>

<html class="light" lang="en">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Create Account | VehicleCare</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap"
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>

<body class="bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-[#f8f9fc] min-h-screen">
    <div class="flex h-screen w-full flex-col">
        <!-- Navigation -->
        <header
            class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-3 md:px-20 lg:px-40">
            <div class="flex items-center gap-2">
                <div class="text-primary">
                    <span class="material-symbols-outlined text-3xl">directions_car</span>
                </div>
                <h2 class="text-[#0d121b] dark:text-[#f8f9fc] text-xl font-bold tracking-tight">VehicleCare</h2>
            </div>
            <div class="flex items-center gap-4">
                <span class="hidden sm:inline text-sm text-slate-500 dark:text-slate-400">Already have an
                    account?</span>
                <a class="text-sm font-bold text-primary hover:underline" href="#">Log In</a>
            </div>
        </header>
        <!-- Main Content Split Screen -->
        <main class="flex flex-1 overflow-hidden">
            <!-- Left Side: Plan Summary (Hidden on mobile, visible on lg) -->
            <div
                class="hidden lg:flex lg:w-[40%] flex-col justify-center bg-slate-50 dark:bg-slate-900/50 p-20 border-r border-slate-200 dark:border-slate-800">
                <div class="max-w-md">
                    <div class="mb-8">
                        <span
                            class="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4">Selected
                            Plan</span>
                        <h1 class="text-4xl font-black leading-tight text-slate-900 dark:text-white mb-2">Pro Plan</h1>
                        <p class="text-3xl font-bold text-primary">9.99€<span
                                class="text-lg font-normal text-slate-500">/mo</span></p>
                    </div>
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                                <span class="material-symbols-outlined text-primary">analytics</span>
                            </div>
                            <div>
                                <h3 class="font-bold text-slate-900 dark:text-white">Real-time Diagnostics</h3>
                                <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Advanced scanning
                                    and live engine data monitoring through OBD-II.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                                <span class="material-symbols-outlined text-primary">notifications_active</span>
                            </div>
                            <div>
                                <h3 class="font-bold text-slate-900 dark:text-white">Smart Reminders</h3>
                                <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Automatic alerts
                                    for oil changes, tire rotations, and scheduled maintenance.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                                <span class="material-symbols-outlined text-primary">directions_car</span>
                            </div>
                            <div>
                                <h3 class="font-bold text-slate-900 dark:text-white">Unlimited Profiles</h3>
                                <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Manage your entire
                                    fleet or family collection without any limits.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-12 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <div class="flex items-center gap-3">
                            <div
                                class="h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                                <span class="material-symbols-outlined text-slate-400">verified_user</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm font-bold text-slate-900 dark:text-white leading-none">Safe &amp;
                                    Secure</span>
                                <span class="text-xs text-slate-500 dark:text-slate-400">GDPR Compliant &amp; Encrypted
                                    Data</span>
                            </div>
                            <button class="ml-auto text-xs font-bold text-primary hover:text-primary/80">Change
                                Plan</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Right Side: Registration Form -->
            <div
                class="flex-1 flex flex-col items-center justify-center bg-white dark:bg-background-dark p-6 md:p-12 lg:p-20 overflow-y-auto">
                <div class="w-full max-w-[480px]">
                    <div class="mb-10 text-center lg:text-left">
                        <h2 class="text-3xl font-black text-slate-900 dark:text-white mb-3">Create Your Pro Account</h2>
                        <p class="text-slate-500 dark:text-slate-400">Join thousands of vehicle owners managing their
                            cars more efficiently today.</p>
                    </div>
                    <form class="space-y-5">
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span class="material-symbols-outlined text-slate-400 text-lg">person</span>
                                </div>
                                <input
                                    class="w-full h-12 pl-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="Enter your full name" type="text" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span class="material-symbols-outlined text-slate-400 text-lg">mail</span>
                                </div>
                                <input
                                    class="w-full h-12 pl-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="name@company.com" type="email" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span class="material-symbols-outlined text-slate-400 text-lg">lock</span>
                                </div>
                                <input
                                    class="w-full h-12 pl-10 pr-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="••••••••" type="password" />
                                <button class="absolute inset-y-0 right-0 flex items-center pr-3" type="button">
                                    <span
                                        class="material-symbols-outlined text-slate-400 text-lg hover:text-slate-600">visibility</span>
                                </button>
                            </div>
                            <p class="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Must be at
                                least 8 characters</p>
                        </div>
                        <div class="flex items-start gap-3 py-2">
                            <input
                                class="mt-1 h-5 w-5 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary"
                                id="terms" type="checkbox" />
                            <label class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed" for="terms">
                                I agree to the <a class="text-primary font-bold hover:underline" href="#">Terms of
                                    Service</a> and <a class="text-primary font-bold hover:underline"
                                    href="#">Privacy Policy</a>.
                            </label>
                        </div>
                        <button
                            class="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                            type="submit">
                            <span>Create Account</span>
                            <span class="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                        <div class="relative flex py-5 items-center">
                            <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                            <span
                                class="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Or
                                sign up with</span>
                            <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <button
                                class="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                type="button">
                                <svg class="h-5 w-5" viewbox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"></path>
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"></path>
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"></path>
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                                        fill="#EA4335"></path>
                                </svg>
                                Google
                            </button>
                            <button
                                class="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                type="button">
                                <svg class="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
                                    <path
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z">
                                    </path>
                                </svg>
                                GitHub
                            </button>
                        </div>
                    </form>
                    <div class="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 lg:hidden text-center">
                        <div
                            class="inline-flex items-center gap-2 p-2 rounded-lg bg-primary/5 text-primary text-sm font-bold">
                            <span class="material-symbols-outlined text-sm">stars</span>
                            You are subscribing to Pro Plan - 9.99€/mo
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- Footer Badges -->
        <footer
            class="hidden md:flex items-center justify-center gap-10 py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
            <div class="flex items-center gap-2 text-slate-400">
                <span class="material-symbols-outlined text-lg">shield_lock</span>
                <span class="text-xs font-bold uppercase tracking-widest">Secure Checkout</span>
            </div>
            <div class="flex items-center gap-2 text-slate-400">
                <span class="material-symbols-outlined text-lg">public</span>
                <span class="text-xs font-bold uppercase tracking-widest">Available Worldwide</span>
            </div>
            <div class="flex items-center gap-2 text-slate-400">
                <span class="material-symbols-outlined text-lg">support_agent</span>
                <span class="text-xs font-bold uppercase tracking-widest">24/7 Priority Support</span>
            </div>
        </footer>
    </div>
</body>

</html>
