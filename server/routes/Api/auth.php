<?php

use App\Http\Controllers\Api\Auth\AuthenticationController;
use Illuminate\Support\Facades\Route;

Route::group( ['namespace' => 'Auth'],function () {
    Route::post('authentication', [AuthenticationController::class, 'authentication']);
});
