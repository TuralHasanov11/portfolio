<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\SitesController;
use App\Http\Controllers\ContactController;

Route::get('/',[PagesController::class,'home'])->name('home');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::prefix('admin')->name('admin.')->middleware(['auth','is_admin'])->group(function(){
    Route::get('sites',[SitesController::class, 'index'])->name('sites.index');
    Route::get('sites/{site}',[SitesController::class, 'show'])->name('sites.show');
    Route::post('sites',[SitesController::class, 'store'])->name('sites.store');
    Route::put('sites/{site}',[SitesController::class, 'update'])->name('sites.update');
    Route::delete('sites/{site}',[SitesController::class, 'destroy'])->name('sites.destroy');
});

Route::post('send-mail', [ContactController::class, 'sendMail'])->name('send-mail');


require __DIR__.'/auth.php';
