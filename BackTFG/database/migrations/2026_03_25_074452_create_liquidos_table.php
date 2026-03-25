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
        Schema::create('liquidos', function (Blueprint $table) {
            $table->id();
            //relaciones
            $table->foreignId('vehiculo_id')->constrained('vehiculos')->onDelete('cascade');
            //atributos
            $table->string('marca');
            $table->string('modelo')->nullable();
            $table->string('km_cambio')->nullable();
            $table->string('tiempo_cambio')->nullable();
            $table->string('ruta_encriptada'); //foto del liquido
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('liquidos');
    }
};
