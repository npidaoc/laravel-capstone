<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::get('/users', [App\Http\Controllers\UsersController::class, 'index']);
Route::post('/inquiries', [App\Http\Controllers\UsersController::class, 'inquiries']);
Route::get('/users/{id}', [App\Http\Controllers\UsersController::class, 'show']);
Route::put('/users/{id}', [App\Http\Controllers\UsersController::class, 'update']);
Route::delete('/users/{id}', [App\Http\Controllers\UsersController::class, 'destroy']);


use App\Models\AdminCredential;

// Get admin credentials
Route::get('/admin-credentials', function () {
    $adminCredentials = AdminCredential::first();
    return response()->json($adminCredentials);
});

// Delete admin credentials
Route::delete('/admin-credentials/{id}', function ($id) {
    $adminCredential = AdminCredential::findOrFail($id);
    $adminCredential->delete();
    return response()->json(['message' => 'Admin credential deleted successfully']);
});

// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/logout', [AuthController::class, 'logout']);

Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');



