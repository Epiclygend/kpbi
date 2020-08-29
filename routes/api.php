<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'api'], function () {
    Route::group([
        'prefix' => 'kpbi',
        'namespace' => 'KPBI'
    ], function () {
        Route::get('/profile', 'ProfileAPIController@get')->middleware('auth:api');
        Route::put('/profile', 'ProfileAPIController@update')->middleware('auth:api');
        Route::post('/profile/pt-image', 'ProfileAPIController@uploadPTimg')->middleware('auth:api');
        Route::post('/profile/kaprodi-image', 'ProfileAPIController@uploadKaprodiimg')->middleware('auth:api');
        Route::get('/profiles', 'ProfileAPIController@getAll');
    });

    Route::group([
        'prefix' => 'auth',
        'namespace' => 'Auth\API'
    ], function () {
        Route::post('/login', 'BasicController@login');
        Route::post('/register', 'RegisterController@register');

        Route::middleware('auth:api')->group(function () {
            Route::get('/user', 'BasicController@user');
            Route::put('/user/change-password', 'BasicController@changePassword');
            Route::post('/logout', 'BasicController@logout');
        });
    });

    Route::post('/forgot-password', 'Auth\API\ForgotPassword');
});

Route::post('/reset/{username}', 'Auth\API\ResetPassword')->name('password.reset');

Route::group([
    'prefix' => 'verify',
    'as' => 'verification'
], function () {
    Route::post('/{id}', 'Auth\API\VerificationController@verify')->name('.verify');
    Route::get('/resend', 'Auth\API\VerificationController@resend')->name('.resend');
});
