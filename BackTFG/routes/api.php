// Ruta pública para obtener todas las marcas (solo nombres)
use App\Http\Controllers\MarcaController;
Route::get('/marcas', [MarcaController::class, 'index']);
<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminDataController;
use App\Http\Controllers\VehiculoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register',[AuthController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);
    
Route::middleware('auth:sanctum')->group(function () {
    Route::put('/user/{id}', [AuthController::class, 'update']);
    Route::delete('/user/{id}', [AuthController::class, 'destroy']);
    
    // Rutas para el CRUD de Vehículos
    Route::apiResource('/vehiculos', VehiculoController::class);

    // Rutas para expandir el catálogo (Create y List)
    Route::get('/admin/marcas', [AdminDataController::class, 'indexMarcas']);
    Route::post('/admin/marcas', [AdminDataController::class, 'storeMarca']);
    Route::post('/admin/modelos', [AdminDataController::class, 'storeModelo']);
    Route::post('/admin/motorizaciones', [AdminDataController::class, 'storeMotorizacion']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
