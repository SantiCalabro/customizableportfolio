<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TechnologyController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\ComplementaryStudyController;
use App\Http\Controllers\Api\StudyController;
use App\Http\Controllers\Api\ProjectController;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required',
    ]);
    $user = User::where('email', $request->email)->first();
    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }
    return $user->createToken($request->device_name)->plainTextToken;
});

Route::get('/login', function () {
    return view('auth.login');
})->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::post('/user', [UserController::class, 'store']);
    Route::put('/user/{id}',[UserController::class, 'update']);
    Route::post('/technology', [TechnologyController::class, 'store']);
    Route::put('/technology/{id}',[TechnologyController::class, 'update']);
    Route::delete('/technology/{id}', [TechnologyController::class, 'destroy']);
    Route::post('/language', [LanguageController::class, 'store']);
    Route::put('/language/{id}', [LanguageController::class, 'update']);
    Route::delete('/language/{id}', [LanguageController::class, 'destroy']);
    Route::post('/study', [StudyController::class, 'store']);
    Route::put('/study/{id}', [StudyController::class, 'update']);
    Route::delete('/study/{id}', [StudyController::class, 'destroy']);
    Route::post('/complementary-study', [ComplementaryStudyController::class, 'store']);
    Route::put('/complementary-study/{id}', [ComplementaryStudyController::class, 'update']);
    Route::delete('/complementary-study/{id}', [ComplementaryStudyController::class, 'destroy']);
    Route::post('/project', [ProjectController::class, 'store']);
    Route::put('/project/{id}', [ProjectController::class, 'update']);
    Route::delete('/project/{id}', [ProjectController::class, 'delete']);
});

Route::get('/user', [UserController::class, 'index']);
Route::get('/complementary-study', [ComplementaryStudyController::class, 'index']);

Route::controller(StudyController::class)->group(function(){
    Route::get('/study', 'index');
    Route::get('/studies/{id}', 'show');
});

Route::controller(ProjectController::class)->group(function(){
    Route::get('/projects', 'index');
    Route::get('/project/{id}', 'show');
});
