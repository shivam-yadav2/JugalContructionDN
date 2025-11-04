<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Career;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $careers = Career::orderBy('order')->orderBy('created_at', 'desc')->get();
        
        return Inertia::render('Admin/Careers/Index', [
            'careers' => $careers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Careers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'requirements' => 'nullable|string',
            'location' => 'nullable|string|max:255',
            'type' => 'required|in:full-time,part-time,contract,internship',
            'department' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        Career::create($validated);

        return redirect()->route('admin.careers.index')
            ->with('success', 'Career created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Career $career): Response
    {
        return Inertia::render('Admin/Careers/Edit', [
            'career' => $career,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Career $career): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'requirements' => 'nullable|string',
            'location' => 'nullable|string|max:255',
            'type' => 'required|in:full-time,part-time,contract,internship',
            'department' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $career->update($validated);

        return redirect()->route('admin.careers.index')
            ->with('success', 'Career updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Career $career): RedirectResponse
    {
        $career->delete();

        return redirect()->route('admin.careers.index')
            ->with('success', 'Career deleted successfully.');
    }
}
