<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $projects = Project::with('amenities')
            ->orderBy('order')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'category' => 'required|in:commercial,residential',
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'long_description' => 'nullable|string',
            'location' => 'nullable|string|max:255',
            'link' => 'nullable|url|max:255',
            'map_embed_code' => 'nullable|string',
            'youtube_video_link' => 'nullable|url|max:255',
            'rera_details' => 'nullable|string',
            'property_images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'property_videos.*' => 'nullable|mimes:mp4,mov,avi|max:51200',
            'construction_images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'show_rera_section' => 'boolean',
            'show_construction_images' => 'boolean',
            'show_property_images' => 'boolean',
            'show_property_videos' => 'boolean',
            'show_amenities' => 'boolean',
            'is_active' => 'boolean',
            'order' => 'nullable|integer',
        ]);

        // Handle image uploads
        $propertyImages = [];
        if ($request->hasFile('property_images')) {
            foreach ($request->file('property_images') as $image) {
                $path = $image->store('projects/property-images', 'public');
                $propertyImages[] = $path;
            }
        }

        $constructionImages = [];
        if ($request->hasFile('construction_images')) {
            foreach ($request->file('construction_images') as $image) {
                $path = $image->store('projects/construction-images', 'public');
                $constructionImages[] = $path;
            }
        }

        $propertyVideos = [];
        if ($request->hasFile('property_videos')) {
            foreach ($request->file('property_videos') as $video) {
                $path = $video->store('projects/property-videos', 'public');
                $propertyVideos[] = $path;
            }
        }

        $validated['property_images'] = $propertyImages;
        $validated['construction_images'] = $constructionImages;
        $validated['property_videos'] = $propertyVideos;

        Project::create($validated);

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project): Response
    {
        $project->load('amenities');
        
        return Inertia::render('Admin/Projects/Show', [
            'project' => $project,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project): Response
    {
        $project->load('amenities');
        
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project): RedirectResponse
    {
        $validated = $request->validate([
            'category' => 'required|in:commercial,residential',
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'long_description' => 'nullable|string',
            'location' => 'nullable|string|max:255',
            'link' => 'nullable|url|max:255',
            'map_embed_code' => 'nullable|string',
            'youtube_video_link' => 'nullable|url|max:255',
            'rera_details' => 'nullable|string',
            'property_images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'property_videos.*' => 'nullable|mimes:mp4,mov,avi|max:51200',
            'construction_images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'existing_property_images' => 'nullable|array',
            'existing_construction_images' => 'nullable|array',
            'existing_property_videos' => 'nullable|array',
            'show_rera_section' => 'boolean',
            'show_construction_images' => 'boolean',
            'show_property_images' => 'boolean',
            'show_property_videos' => 'boolean',
            'show_amenities' => 'boolean',
            'is_active' => 'boolean',
            'order' => 'nullable|integer',
        ]);

        // Handle new image uploads
        $propertyImages = $request->existing_property_images ?? [];
        if ($request->hasFile('property_images')) {
            foreach ($request->file('property_images') as $image) {
                $path = $image->store('projects/property-images', 'public');
                $propertyImages[] = $path;
            }
        }

        $constructionImages = $request->existing_construction_images ?? [];
        if ($request->hasFile('construction_images')) {
            foreach ($request->file('construction_images') as $image) {
                $path = $image->store('projects/construction-images', 'public');
                $constructionImages[] = $path;
            }
        }

        $propertyVideos = $request->existing_property_videos ?? [];
        if ($request->hasFile('property_videos')) {
            foreach ($request->file('property_videos') as $video) {
                $path = $video->store('projects/property-videos', 'public');
                $propertyVideos[] = $path;
            }
        }

        // Delete removed images
        $oldPropertyImages = $project->property_images ?? [];
        $removedPropertyImages = array_diff($oldPropertyImages, $propertyImages);
        foreach ($removedPropertyImages as $image) {
            Storage::disk('public')->delete($image);
        }

        $oldConstructionImages = $project->construction_images ?? [];
        $removedConstructionImages = array_diff($oldConstructionImages, $constructionImages);
        foreach ($removedConstructionImages as $image) {
            Storage::disk('public')->delete($image);
        }

        $oldPropertyVideos = $project->property_videos ?? [];
        $removedPropertyVideos = array_diff($oldPropertyVideos, $propertyVideos);
        foreach ($removedPropertyVideos as $video) {
            Storage::disk('public')->delete($video);
        }

        $validated['property_images'] = $propertyImages;
        $validated['construction_images'] = $constructionImages;
        $validated['property_videos'] = $propertyVideos;

        $project->update($validated);

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project): RedirectResponse
    {
        // Delete associated images and videos
        if ($project->property_images) {
            foreach ($project->property_images as $image) {
                Storage::disk('public')->delete($image);
            }
        }
        if ($project->construction_images) {
            foreach ($project->construction_images as $image) {
                Storage::disk('public')->delete($image);
            }
        }
        if ($project->property_videos) {
            foreach ($project->property_videos as $video) {
                Storage::disk('public')->delete($video);
            }
        }

        $project->delete();

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project deleted successfully.');
    }
}
