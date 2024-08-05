<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Language;

class LanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
          $lang = Language::all();
        try{
            return $lang;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'User has not uploaded any language yet.',
            ],500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
           $validatedData = $request->validate([
            'language' => 'required|string|max:255',
            'proficiency' => 'required|string|max:255',
            'academy'=> 'string|max:255',
            'user_id'=>'required|integer'
           ]);
           $lang = Language::create($validatedData);
           return response()->json([
            'message'=>'Language successfully created',
            'data'=>$lang
           ],201);
        }catch(\Exception $e){
            return response()->json([
                'message'=>'Error loading a language',
                'error'=>$e->getMessage()
            ],500);
        }
    }


    public function update(Request $request, string $id)
    {
        try{
            $lang = Language::findOrFail($id);
           $validatedData = $request->validate([
            'language' => 'required|string|max:255',
            'proficiency' => 'required|string|max:255',
            'academy' => 'string|max:255'
           ]);
           $lang->update($validatedData);
            return response()->json([
                'message'=>'Language successfully updated',
                'data'=>$lang
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'message'=>'error updating language',
                'error'=>$e->getMessage()
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $lang = Language::findOrFail($id);
        $lang->delete();
        return response()->json([
            'message'=>'Language removed successfully'
        ],200);
    }
}
