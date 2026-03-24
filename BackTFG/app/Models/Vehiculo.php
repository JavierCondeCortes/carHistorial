<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Vehiculo extends Model
{
    use HasFactory;

    // Campos que permitimos llenar desde un formulario o Seeder
    protected $fillable = [
        'user_id', 
        'marca_id', 
        'modelo_id', 
        'pegatina_id', 
        'motorizacion', 
        'color', 
        'fecha_primera_matriculacion', 
        'plazas', 
        'kilometros_recorridos', 
        'ultima_fecha_itv', 
        'matricula', 
        'numero_bastidor'
    ];

    // Relación: Un vehículo pertenece a un Usuario
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Relación: Un vehículo tiene una Marca
    public function marca(): BelongsTo
    {
        return $this->belongsTo(Marca::class, 'marca_id');
    }

    // Relación: Un vehículo tiene un Modelo
    public function modelo(): BelongsTo
    {
        return $this->belongsTo(Modelos::class, 'modelo_id');
    }

    // Relación: Un vehículo tiene una Pegatina (Etiqueta)
    public function etiqueta(): BelongsTo
    {
        return $this->belongsTo(Pegatinas::class, 'pegatina_id');
    }
}