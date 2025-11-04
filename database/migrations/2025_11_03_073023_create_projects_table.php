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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->enum('category', ['commercial', 'residential'])->default('residential');
            $table->string('name');
            $table->string('title');
            $table->text('short_description')->nullable();
            $table->longText('long_description')->nullable();
            $table->string('location')->nullable();
            $table->string('link')->nullable();
            $table->text('map_embed_code')->nullable();
            $table->string('youtube_video_link')->nullable();
            $table->longText('rera_details')->nullable();
            $table->json('property_images')->nullable();
            $table->json('property_videos')->nullable();
            $table->json('construction_images')->nullable();
            // Section visibility flags
            $table->boolean('show_rera_section')->default(true);
            $table->boolean('show_construction_images')->default(true);
            $table->boolean('show_property_images')->default(true);
            $table->boolean('show_property_videos')->default(true);
            $table->boolean('show_amenities')->default(true);
            $table->boolean('is_active')->default(true);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
