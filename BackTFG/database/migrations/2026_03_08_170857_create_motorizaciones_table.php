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
        Schema::create('motorizaciones', function (Blueprint $table) {
            $table->id();
            $table->string('nombre'); // Ej: 1.9TDI, 1.6GDI
            $table->integer('kilowatios')->nullable(); // Ej: 110
            $table->string('tipo_motor'); // combustion, hibrido, electrico
            $table->foreignId('tipo_combustible_id')->constrained('tipos_combustible');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('motorizacion');
    }
};
