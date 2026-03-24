<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    // Devuelve todas las marcas (solo nombres y id)
    public function index()
    {
        $marcas = Marca::select('id', 'nombre')->get();
        return response()->json($marcas);
    }
}
