<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\AmenityController;
use App\Http\Controllers\Admin\ContactDetailController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\CareerController;
use App\Http\Controllers\Admin\EnquiryController;

Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified'])->group(function () {
    // Admin Dashboard
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    
    // Projects Routes
    Route::resource('projects', ProjectController::class);
    
    // Amenities Routes (nested under projects)
    Route::post('projects/{project}/amenities', [AmenityController::class, 'store'])->name('projects.amenities.store');
    Route::put('projects/{project}/amenities/{amenity}', [AmenityController::class, 'update'])->name('projects.amenities.update');
    Route::delete('projects/{project}/amenities/{amenity}', [AmenityController::class, 'destroy'])->name('projects.amenities.destroy');
    
    // Contact Details Routes
    Route::resource('contact-details', ContactDetailController::class);
    
    // Sliders Routes
    Route::resource('sliders', SliderController::class);
    
    // Careers Routes
    Route::resource('careers', CareerController::class);
    
    // Enquiries Routes
    Route::get('enquiries', [EnquiryController::class, 'index'])->name('enquiries.index');
    Route::get('enquiries/{enquiry}', [EnquiryController::class, 'show'])->name('enquiries.show');
    Route::post('enquiries/{enquiry}/mark-read', [EnquiryController::class, 'markAsRead'])->name('enquiries.mark-read');
    Route::delete('enquiries/{enquiry}', [EnquiryController::class, 'destroy'])->name('enquiries.destroy');
});

