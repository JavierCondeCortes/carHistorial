<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehiculos', function (Blueprint $table) {
            $table->id();
            // Relaciones
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('marca_id')->constrained('marcas');
            $table->foreignId('modelo_id')->constrained('modelos');
            $table->foreignId('motorizacion_id')->constrained('motorizaciones');
            $table->foreignId('pegatina_id')->constrained('pegatinas');

            // Datos del coche
            $table->string('color');
            $table->date('fecha_primera_matriculacion')->nullable();
            $table->integer('plazas')->default(5);
            $table->bigInteger('kilometros_recorridos');
            $table->date('ultima_fecha_itv')->nullable();
            $table->string('matricula')->nullable()->unique();
            $table->string('numero_bastidor')->nullable()->unique(); // VIN para verificación

            $table->timestamps(); // Esto crea fecha_creacion (created_at) automáticamente
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehiculos');
    }
};
