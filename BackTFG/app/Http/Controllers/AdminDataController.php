<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use App\Models\Modelo;
use App\Models\Motorizacion;
use Illuminate\Http\Request;

class AdminDataController extends Controller
{
    // Crear nueva Marca
    public function storeMarca(Request $request) {
        $request->validate(['nombre' => 'required|unique:marcas']);
        $marca = Marca::create($request->all());
        return response()->json($marca, 201);
    }

    // Crear nuevo Modelo asociado a una Marca
    public function storeModelo(Request $request) {
        $request->validate([
            'nombre' => 'required',
            'marca_id' => 'required|exists:marcas,id'
        ]);
        $modelo = Modelo::create($request->all());
        return response()->json($modelo, 201);
    }

    // Crear nueva Motorización
    public function storeMotorizacion(Request $request) {
        $request->validate([
            'nombre' => 'required', // Ej: 1.6 BlueHDi
            'tipo_motor' => 'required|in:combustion,electrico,hibrido_enchufable,hibrido_no_enchufable',
            'kilowatios' => 'nullable|integer',
            'tipo_combustible_id' => 'required|exists:tipos_combustible,id'
        ]);
        $motor = Motorizacion::create($request->all());
        return response()->json($motor, 201);
    }
}