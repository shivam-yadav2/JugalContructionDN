<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/blog', function () {
    return Inertia::render('Blog/Blog');
});
Route::get('/about/introduction', function () {
    return Inertia::render('AboutPages/Introduction');
});
Route::get('/about/vision-mission', function () {
    return Inertia::render('AboutPages/Vision');
});
Route::get('/about/our-team', function () {
    return Inertia::render('AboutPages/Team');
});
Route::get('/media/news-events', function () {
    return Inertia::render('Media/Event');
});
Route::get('/media/press-coverage', function () {
    return Inertia::render('Media/Press');
});
Route::get('/career', function () {
    return Inertia::render('Career/Career');
});
Route::get('/contact-us', function () {
    return Inertia::render('Contact/Contact');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
