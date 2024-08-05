<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Exception;

class UserController extends Controller
{
    
    public function index()
    {
        $user = User::with('technologies','languages')->get();
        if(count($user)){
              return $user;
        }else{
            return response()->json([
                'message'=>'No user has been uploaded yet.'
            ],200);
        } 
    }

    public function update(Request $request, string $id)
    {
       try{
        $user = User::findOrFail($id);
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'picture' => 'sometimes|required|string|max:255',
            'lastname' => 'sometimes|required|string|max:255',
            'city' => 'sometimes|required|string|max:255',
            'country' => 'sometimes|required|string|max:255',
            'phone' => 'sometimes|required|string|max:15',
            'profession' => 'sometimes|required|string|max:255',
            'about' => 'sometimes|nullable|string|max:1000',
            'email' => 'sometimes|required|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|nullable|string|min:8|confirmed',
            'birthdate' => 'sometimes|required|date|before:today',
        ]);
        $validatedData['picture'] = $request->has('picture') ? $request['picture'] : 'something';
        if(isset($validatedData['password'])){
            $validatedData['password'] = Hash::make($validatedData['password']);
        };
        $user->update($validatedData);
        return response()->json([
            'message'=>'User updated successfully.',
            'data'=>$user
        ],200);
       }catch(\ValidationException $e){
        return response()->json([
            'message'=>'Validation errors',
            'errors'=>$e->getErrors()
        ],422);
       }catch(\Exception $e){
        return response()->json([
            'message'=>'User could not be updated.',
            'errors'=>$e->getMessage()
        ],500);
       }
    }

    public function store(Request $request){
        try{
            $validatedData = $request->validate([
                'name'=>'required|string|max:255',
                'lastname'=>'required|string|max:255',
                'picture'=>'nullable|string|max:255',
                'birthdate'=>'required|date|before:today',
                'city'=>'required|string|max:255',
                'country'=>'required|string|max:255',
                'profession'=>'required|string|max:255',
                'about'=>'nullable|string|min:10|max:2000',
                'email'=>'required|email|max:255|unique:users,email',
                'password' => 'required|string|min:8|confirmed',
                'provider' => 'nullable|string|max:255',
                'provider_id' => 'nullable|string|max:255|unique:users,provider_id'
            ]);
            $validatedData['picture'] = $request->has('picture') ? $request['picture'] : 'something';
            if(isset( $validatedData['password'])){
                $validatedData['password'] = Hash::make($validatedData['password']);
            };

            $user = User::create($validatedData);
            return response()->json([
                'message'=>'User created successfully.',
                'user'=> $user
            ],201);
        }catch(\ValidationException $e){
            return response()->json([
                'message'=>'Validation errors',
                'errors'=>$e->errors()
            ],422);
        }catch(\Exception $e){
            return response()->json([
                'message'=> 'Error creating user',
                'error'=> $e->getMessage()
            ],500);
        }
    }
}
