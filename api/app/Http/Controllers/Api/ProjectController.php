<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       try{ 
        $projects = Project::with(['images'])->get();
        return $projects;
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Projects not found',
                'error'=> $e->getMessage()
            ],500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
  
public function store(Request $request)
{
    DB::beginTransaction();
    try {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'start_year' => 'required|digits:4|integer|between:1000,9999',
            'end_year' => 'nullable|digits:4|integer|between:1000,9999',
            'archived' => 'boolean',
            'user_id' => 'required|integer'
        ]);
        $validatedData['archived'] = $request->has('archived') ? $request['archived'] : false;

        $project = Project::create($validatedData);

        $validatedImageData = $request->validate([
            'images' => 'required|array',
            'images.*.path' => 'required|string|max:255',
            'images.*.caption' => 'nullable|string|max:255'
        ]);

        foreach ($validatedImageData['images'] as $imageData) {
            $project->images()->create([
                'path' => $imageData['path'],
                'caption' => $imageData['caption'] ?? null
            ]);
        }

        DB::commit();

        return response()->json([
            'message' => 'Project successfully created',
            'data' => $project->load('images')
        ], 201);
    } catch (ValidationException $e) {
        DB::rollBack();
        return response()->json([
            'message' => 'Validation errors',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json([
            'message' => 'Error storing project',
            'error' => $e->getMessage()
        ], 500);
    }
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try{
            $project = Project::findOrFail($id)->load('images');
            return $project;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'project not found',
                'error'=>$e->getMessage()
            ],500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        DB::beginTransaction();
        try{
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'start_year' => 'required|digits:4|integer|between:1000,9999',
                'end_year' => 'nullable|digits:4|integer|between:1000,9999',
                'archived' => 'boolean',
                'user_id' => 'required|integer'
            ]);
            $validatedData['archived'] = $request->has('archived') ? $request['archived'] : false;
            $project = Project::findOrFail($id);
            $project->update($validatedData);

            $validatedImageData = $request->validate([
                'images' => 'required|array',
                'images.*.id'=>'nullable|integer|exists:product_images,id',
                'images.*.path' => 'required|string|max:255',
                'images.*.caption' => 'nullable|string|max:255'
            ]);
            
            $currentImageIds = $project->images->pluck('id')->toArray(); //Guarda en una colección los ID de las imágenes del modelo y las transforma en un array.
            $newImageIds = array_column($validatedImageData['images'], 'id'); //Guarda en un array todos los ID de imágenes que llegan a través de $request (pueden ya existir en DB o ser nuevos).
            // Nos queda también eliminar los que no figuren en $request.

            foreach($validatedImageData['images'] as $imageData){
                if(isset($imageData['id'])){
                    //Si la imagen tiene ID es porque existe en DB. El id se genera al ingresar, si es nueva no tiene!
                    $image = ProjectImage::findOrFail($imageData['id']);
                    $image->update([
                        'path' => $imageData['path'],
                        'caption'=>$imageData['caption'] ?? null
                    ]);
                }else{
                    //Es una imagen nueva entonces no tiene ID aún.
                    $project->images()->create([
                        'path' => $imageData['path'],
                        'caption'=>$imageData['caption'] ?? null
                    ]);
                };
            }
            $imagesToDelete = array_diff($currentImageIds, $newImageIds); //Da como resultado un array con los current Id que NO se encuentran en los new Id (request).
            foreach($imagesToDelete as $oldImageId){
                $img = ProjectImage::findOrFail($oldImageId)->delete();
            }

            DB::commit();
            return response()->json([
                'message' => 'Project successfully updated',
                'data' => $project->load('images')
            ],200);
        }catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error updating project',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(string $id)
    {
        try{
            $project = Project::findOrFail($id);
            $project->delete();
            return response()->json([
                'message'=>'project successfully deleted'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'message'=>'error deleting project',
                'error'=>$e->getMessage()
            ],500);
        }
    }
}
