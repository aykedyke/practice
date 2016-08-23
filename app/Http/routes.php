<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
	//return View::make('index');
});

//Route::auth();

//Route::get('/home', 'HomeController@index');
Route::post('/auth', 'UserController@login');
Route::post('/users', 'UserController@store');
Route::get('/users', 'UserController@list');
Route::put('/users', 'UserController@update');