<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ContactDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $contactDetails = ContactDetail::orderBy('order')->orderBy('created_at', 'desc')->get();
        
        return Inertia::render('Admin/ContactDetails/Index', [
            'contactDetails' => $contactDetails,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/ContactDetails/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'label' => 'required|string|max:255',
            'value' => 'required|string',
            'icon' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        ContactDetail::create($validated);

        return redirect()->route('admin.contact-details.index')
            ->with('success', 'Contact detail created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactDetail $contactDetail): Response
    {
        return Inertia::render('Admin/ContactDetails/Edit', [
            'contactDetail' => $contactDetail,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ContactDetail $contactDetail): RedirectResponse
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'label' => 'required|string|max:255',
            'value' => 'required|string',
            'icon' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $contactDetail->update($validated);

        return redirect()->route('admin.contact-details.index')
            ->with('success', 'Contact detail updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactDetail $contactDetail): RedirectResponse
    {
        $contactDetail->delete();

        return redirect()->route('admin.contact-details.index')
            ->with('success', 'Contact detail deleted successfully.');
    }
}
