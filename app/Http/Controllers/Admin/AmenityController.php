<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Amenity;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class AmenityController extends Controller
{
    /**
     * Display a listing of amenities for a project.
     */
    public function index(Project $project): Response
    {
        $amenities = $project->amenities()->orderBy('order')->get();
        
        return Inertia::render('Admin/Projects/Amenities/Index', [
            'project' => $project,
            'amenities' => $amenities,
        ]);
    }

    /**
     * Store a newly created amenity.
     */
    public function store(Request $request, Project $project): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'order' => 'nullable|integer',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('amenities', 'public');
        }

        $project->amenities()->create($validated);

        return redirect()->route('admin.projects.show', $project)
            ->with('success', 'Amenity created successfully.');
    }

    /**
     * Update the specified amenity.
     */
    public function update(Request $request, Project $project, Amenity $amenity): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'order' => 'nullable|integer',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            if ($amenity->image) {
                Storage::disk('public')->delete($amenity->image);
            }
            $validated['image'] = $request->file('image')->store('amenities', 'public');
        } else {
            $validated['image'] = $amenity->image;
        }

        $amenity->update($validated);

        return redirect()->route('admin.projects.show', $project)
            ->with('success', 'Amenity updated successfully.');
    }

    /**
     * Remove the specified amenity.
     */
    public function destroy(Project $project, Amenity $amenity): RedirectResponse
    {
        // Delete image
        if ($amenity->image) {
            Storage::disk('public')->delete($amenity->image);
        }

        $amenity->delete();

        return redirect()->route('admin.projects.show', $project)
            ->with('success', 'Amenity deleted successfully.');
    }
}
