<?php

namespace App\Http\Controllers;

use App\Forms;
use Illuminate\Http\Request;

class FormsController extends Controller
{
    public function getAll(){
        return Forms::all();
    }

    public function get($id){
        return Forms::findOrFail($id);
    }

    public function create(Request $request){
        return Forms::create($request->all());
    }

    public function update($id, Request $request){
        $item = Forms::findOrFail($id);
        $item->fill($request->all())->save();
        return $item;
    }

    public function delete($id){
        $item = Forms::findOrFail($id);
        $item->delete();
        return $item;
    }
}
