<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Study;

class StudyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $studies = Study::all();
            return $studies;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'The user has not loaded any study yet',
                'error'=> $e->getMessage()
            ],500);
        }
    }

    public function show(string $id){
        try{
            $study = Study::findOrFail($id);
            return $study;
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Study not found',
                'error'=> $e->getMessage()
            ],500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'degree' => 'required|string|max:255',
                'academy' => 'required|string|max:255',
                'description' => 'nullable|string|min:10|max:2000',
                'start_year' => 'required|digits:4|integer|between:1000,9999',
                'end_year' => 'nullable|digits:4|integer|between:1000,9999',
                'user_id' => 'required|integer'
            ]);
            
            $study = Study::create($validatedData);
            
            return response()->json([
                'message' => 'Study uploaded successfully.',
                'data' => $study
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error posting new study',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try{
            $study = Study::findOrFail($id);
            $study->degree = $request->degree;
            $study->academy = $request->academy;
            $study->description = $request->description;
            $study->start_year = $request->start_year;
            $study->end_year = $request->end_year;
            $study->save();

            return $study;
        }catch(\Exception $e){
            return response()->json([
                'message'=> 'error updating study',
                'error'=>$e->getMessage()
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $study = Study::findOrFail($id);
            $study->delete();
            return response()->json([
                'message'=>'study deleted successfully'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'message'=> 'error deleting study',
                'error'=>$e->getMessage()
            ],500);
        }
    }
}
