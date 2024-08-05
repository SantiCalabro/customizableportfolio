<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Technology;
use Exception;

class TechnologyController extends Controller
{
    public function store(Request $request){
        try{
        $validatedData = $request->validate([
            'name'=>'required|string|max:255|unique:technologies,name',
            'icon'=>'required|string|max:255',
            'user_id'=>'required|integer'
        ]);

        $tech = Technology::create($validatedData);
        
        return response()->json([
            'message'=>'Technology created successfully.',
            'data'=>$tech
        ],201);
        }catch(\Exception $e){
            return response()->json([
                'message'=> 'Error posting technology',
                'error'=> $e->getMessage()
            ],500);
        }
     
    }

    public function update(Request $request, string $id){
      try{  $tech = Technology::findOrFail($id);
        $tech->name = $request->name;
        $tech->icon = $request->icon;
        $tech->save();
        return $tech;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'error updating technology',
                'error'=>$e->getMessage()
            ],500);
        };
    }

    public function destroy(string $id){
        try{
            $tech = Technology::findOrFail($id);
            $techName = $tech->name;
            $tech->delete();
            return response()->json([
                'message'=>'Technology successfully deleted',
                'id'=> $id,
                'techonology'=>$techName
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'message'=> 'Error deleting technology',
                'error'=> $e->getMessage()
            ],500);
        };
    }

}
