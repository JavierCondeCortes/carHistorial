<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Marca;
use Illuminate\Support\Facades\File;

class MarcaSeeder extends Seeder
{
    public function run(): void
    {
        // Ruta donde pusiste el JSON anteriormente
        $path = database_path('data/marcas.json');

        if (!File::exists($path)) {
            $this->command->error("El archivo JSON no existe en: $path");
            return;
        }

        $json = File::get($path);
        $marcas = json_decode($json, true);

        foreach ($marcas as $marca) {
            Marca::firstOrCreate([
                'nombre' => $marca['nombre']
            ]);
        }

        $this->command->info("¡Marcas cargadas con éxito!");
    }
}