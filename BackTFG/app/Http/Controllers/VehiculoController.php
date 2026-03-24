<?php

namespace App\Http\Controllers;

use App\Models\Vehiculo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VehiculoController extends Controller
{
    // Listar los vehículos del usuario autenticado
    public function index() {
        return response()->json(Auth::user()->vehiculos()->with(['marca', 'modelo', 'motorizacion', 'pegatina'])->get());
    }

    // CREATE: Guardar nuevo vehículo
    public function store(Request $request) {
        $data = $request->validate([
            'marca_id' => 'required|exists:marcas,id',
            'modelo_id' => 'required|exists:modelos,id',
            'motorizacion_id' => 'required|exists:motorizaciones,id',
            'pegatina_id' => 'required|exists:pegatinas_medioambientales,id',
            'color' => 'required|string',
            'kilometros_recorridos' => 'required|integer',
            'numero_bastidor' => 'required|string|unique:vehiculos,numero_bastidor',
            'plazas' => 'integer',
            'fecha_primera_matriculacion' => 'nullable|date',
            'ultima_fecha_itv' => 'nullable|date',
            'matricula' => 'nullable|string|unique:vehiculos,matricula',
        ]);

        $vehiculo = Auth::user()->vehiculos()->create($data);
        return response()->json(['message' => 'Vehículo registrado', 'vehiculo' => $vehiculo], 210);
    }

    // READ: Ver un vehículo específico
    public function show($id) {
        $vehiculo = Auth::user()->vehiculos()->with(['marca', 'modelo', 'motorizacion', 'informes'])->findOrFail($id);
        return response()->json($vehiculo);
    }

    // UPDATE: Editar datos del vehículo
    public function update(Request $request, $id) {
        $vehiculo = Auth::user()->vehiculos()->findOrFail($id);
        $vehiculo->update($request->all());
        return response()->json(['message' => 'Vehículo actualizado', 'vehiculo' => $vehiculo]);
    }

    // DELETE: Eliminar vehículo
    public function destroy($id) {
        $vehiculo = Auth::user()->vehiculos()->findOrFail($id);
        $vehiculo->delete();
        return response()->json(['message' => 'Vehículo eliminado correctamente']);
    }
}