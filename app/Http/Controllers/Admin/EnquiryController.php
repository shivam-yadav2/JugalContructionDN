<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Enquiry;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class EnquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $enquiries = Enquiry::orderBy('created_at', 'desc')->get();
        
        return Inertia::render('Admin/Enquiries/Index', [
            'enquiries' => $enquiries,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Enquiry $enquiry): Response
    {
        // Mark as read when viewing
        if (!$enquiry->is_read) {
            $enquiry->update(['is_read' => true]);
        }
        
        return Inertia::render('Admin/Enquiries/Show', [
            'enquiry' => $enquiry,
        ]);
    }

    /**
     * Mark enquiry as read/unread
     */
    public function markAsRead(Enquiry $enquiry): RedirectResponse
    {
        $enquiry->update(['is_read' => true]);
        
        return back()->with('success', 'Enquiry marked as read.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Enquiry $enquiry): RedirectResponse
    {
        $enquiry->delete();

        return redirect()->route('admin.enquiries.index')
            ->with('success', 'Enquiry deleted successfully.');
    }
}
