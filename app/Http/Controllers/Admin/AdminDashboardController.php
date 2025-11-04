<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Career;
use App\Models\Slider;
use App\Models\ContactDetail;
use App\Models\Enquiry;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_projects' => Project::count(),
            'active_projects' => Project::where('is_active', true)->count(),
            'total_careers' => Career::count(),
            'active_careers' => Career::where('is_active', true)->count(),
            'total_sliders' => Slider::count(),
            'active_sliders' => Slider::where('is_active', true)->count(),
            'contact_details' => ContactDetail::count(),
            'total_enquiries' => Enquiry::count(),
            'unread_enquiries' => Enquiry::where('is_read', false)->count(),
        ];

        $recent_projects = Project::latest()->take(5)->get();
        
        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentProjects' => $recent_projects,
        ]);
    }
}
