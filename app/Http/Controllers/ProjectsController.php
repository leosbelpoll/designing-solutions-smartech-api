<?php

namespace App\Http\Controllers;

use App\Projects;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getAll(){
        return Projects::all();
    }

    public function get($id){
        return Projects::findOrFail($id);
    }

    public function create(Request $request){
        return Projects::create($request->all());
    }

    public function update($id, Request $request){
        $item = Projects::findOrFail($id);
        $item->fill($request->all())->save();
        return $item;
    }

    public function delete($id){
        $item = Projects::findOrFail($id);
        $item->delete();
        return $item;
    }
}
