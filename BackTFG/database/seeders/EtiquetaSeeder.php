<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Etiqueta; // Asegúrate de que el modelo se llame Etiqueta
use Illuminate\Support\Facades\File;

class EtiquetaSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('data/etiquetas.json');
        
        if (!File::exists($path)) {
            $this->command->error("Archivo etiquetas.json no encontrado.");
            return;
        }

        $json = File::get($path);
        $etiquetas = json_decode($json, true);

        foreach ($etiquetas as $etiqueta) {
            // Usamos el nombre como clave para evitar duplicados
            \App\Models\Pegatinas::updateOrCreate(
                ['nombre' => $etiqueta['nombre']]
            );
        }

        $this->command->info("¡Etiquetas medioambientales cargadas!");
    }
}