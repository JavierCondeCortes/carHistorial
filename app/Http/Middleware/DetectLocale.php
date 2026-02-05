<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class DetectLocale
{
    public function handle($request, Closure $next)
    {
        // Idiomas soportados en tu proyecto
        $availableLocales = ['es', 'en'];

        // Detectar idioma del navegador
        $browserLocale = substr($request->server('HTTP_ACCEPT_LANGUAGE'), 0, 2);

        // Si el idioma está soportado, usarlo
        if (in_array($browserLocale, $availableLocales)) {
            App::setLocale($browserLocale);
        } else {
            App::setLocale(config('app.locale')); // idioma por defecto
        }

        return $next($request);
    }
}
