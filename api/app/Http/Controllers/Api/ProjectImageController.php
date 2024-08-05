<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProjectImage;
use Exception;

class ProjectImageController extends Controller
{
    public function store(Request $request)
    {
        try{
        $validatedData = $request->validate([
            'path' => 'required|url',
            'caption'=>'required|string|max:255'
        ]);
        $image = User::Create($validatedData);
        return response()->json([
            'message'=>'Image successfully uploaded',
            'data' => $image
        ], 201);
        }catch(\Exception $e){
            return response()->json([
                'message'=>'Error storing project image',
                'error'=>$e->getMessage()
            ],500)
        }
    }

    public function destroy(string $id)
    {
        try{
            $image = ProjectImage::findOrFail($id);
            $image->delete();
            return response()->json([
                'message'=>'Image successfully deleted'
            ],200)
        }catch(\Exception $e){
            return response()->json([
                'message'=>'error deleting project image',
                'error'=>$e->getMessage()
            ],500);
        }
    }
}
