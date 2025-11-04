<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'name',
        'title',
        'short_description',
        'long_description',
        'location',
        'link',
        'map_embed_code',
        'youtube_video_link',
        'rera_details',
        'property_images',
        'property_videos',
        'construction_images',
        'show_rera_section',
        'show_construction_images',
        'show_property_images',
        'show_property_videos',
        'show_amenities',
        'is_active',
        'order',
    ];

    protected $casts = [
        'property_images' => 'array',
        'property_videos' => 'array',
        'construction_images' => 'array',
        'show_rera_section' => 'boolean',
        'show_construction_images' => 'boolean',
        'show_property_images' => 'boolean',
        'show_property_videos' => 'boolean',
        'show_amenities' => 'boolean',
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    public function amenities(): HasMany
    {
        return $this->hasMany(Amenity::class)->orderBy('order');
    }
}
