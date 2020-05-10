<?php

namespace App\Http\Controllers;

use App\Standards;
use Illuminate\Http\Request;

class StandardsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getAll(){
        return Standards::all();
    }

    public function get($id){
        return Standards::findOrFail($id);
    }

    public function create(Request $request){
        return Standards::create($request->all());
    }

    public function update($id, Request $request){
        $item = Standards::findOrFail($id);
        $item->fill($request->all())->save();
        return $item;
    }

    public function delete($id){
        $item = Standards::findOrFail($id);
        $item->delete();
        return $item;
    }
}
