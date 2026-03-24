<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Modelo; // Asegúrate de que el modelo se llame Modelo
use App\Models\Marca;
use App\Models\Modelos;
use Illuminate\Support\Facades\File;

class ModeloSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('data/modelos.json');
        $json = File::get($path);
        $modelos = json_decode($json, true);

        foreach ($modelos as $item) {
            // 1. Buscamos la marca por el nombre que viene en el JSON
            $marca = Marca::where('nombre', $item['marca'])->first();

            // 2. Si la marca existe, creamos el modelo asociado
            if ($marca) {
                Modelos::firstOrCreate([
                    'nombre' => $item['nombre'],
                    'marca_id' => $marca->id
                ]);
            }
        }
        
        $this->command->info("¡Modelos cargados correctamente!");
    }
}