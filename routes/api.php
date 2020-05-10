<?php

use Illuminate\Http\Request;
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

// Auth routes
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', 'AuthController@login')->name('auth.login');
    Route::post('logout', 'AuthController@logout')->name('auth.logout');
    Route::post('refresh', 'AuthController@refresh')->name('auth.refresh');
    Route::post('me', 'AuthController@me')->name('auth.me');
});

// Projects routes
Route::get('/projects', 'ProjectsController@getAll')->name('getAllProjects');
Route::get('/projects/{id}', 'ProjectsController@get')->name('getProject');
Route::post('/projects', 'ProjectsController@create')->name('createProject');
Route::put('/projects/{id}', 'ProjectsController@update')->name('updateProject');
Route::delete('/projects/{id}', 'ProjectsController@delete')->name('deleteProject');

// Standards routes
Route::get('/standards', 'ProjectsController@getAll')->name('getAllStandards');
Route::get('/standards/{id}', 'StandardsController@get')->name('getStandard');
Route::post('/standards', 'StandardsController@create')->name('createStandard');
Route::put('/standards/{id}', 'StandardsController@update')->name('updateStandard');
Route::delete('/standards/{id}', 'StandardsController@delete')->name('deleteStandard');

// Forms routes
Route::get('/forms', 'FormsController@getAll')->name('getAllForms');
Route::get('/forms/{id}', 'FormsController@get')->name('getForm');
Route::post('/forms', 'FormsController@create')->name('createForm');
Route::put('/forms/{id}', 'FormsController@update')->name('updateForm');
Route::delete('/forms/{id}', 'FormsController@delete')->name('deleteForm');
