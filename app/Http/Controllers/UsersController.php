<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = Users::all();
        return $users;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function inquiries(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|min:2|max:255',
            'lastName' => 'required|min:2|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|digits_between:10,15',
            'message' => 'required|min:2|max:255'
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $user = new Users();
            $user->firstName = $request->input("firstName");
            $user->lastName = $request->input("lastName");
            $user->email = $request->input("email");
            $user->phone = $request->input("phone");
            $user->message = $request->input("message");
            $user->save();
        }
    
        return response()->json([
            'status' => 200,
            'message' => 'Inquiry added successfully!',
        ]);
    }
    

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = Users::find($id);
        if (!$user) {
            return response()->json([
                'error' => 'User not found',
            ], 404);
        }
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // Return the edit form
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|min:2|max:255',
            'lastName' => 'required|min:2|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|digits_between:10,15',
            'message' => 'required|min:2|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $user = Users::find($id);
            if (!$user) {
                return response()->json([
                    'error' => 'User not found',
                ], 404);
            }

            $user->firstName = $request->input("firstName");
            $user->lastName = $request->input("lastName");
            $user->email = $request->input("email");
            $user->phone = $request->input("phone");
            $user->message = $request->input("message");
            $user->save();
        }

        return response()->json([
            'status' => 200,
            'message' => 'User updated successfully!',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Users::find($id);
        if (!$user) {
            return response()->json([
                'error' => 'User not found',
            ], 404);
        }

        $user->delete();

        return response()->json([
            'status' => 200,
            'message' => 'User deleted successfully!',
        ]);
    }
}


