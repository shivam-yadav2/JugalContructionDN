<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class EnquiryController extends Controller
{
    /**
     * Store a newly created enquiry.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'message' => 'nullable|string',
        ]);

        Enquiry::create($validated);

        return back()->with('success', 'Thank you for your enquiry. We will get back to you soon!');
    }
}

