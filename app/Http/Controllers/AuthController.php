<?php


// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;

// class AuthController extends Controller
// {
//     public function login(Request $request)
//     {
//         // Validate the request data
//         $credentials = $request->only('email', 'password');

//         // Attempt to authenticate the user
//         if (Auth::attempt($credentials)) {
//             // Authentication successful, generate token
//             $token = auth()->user()->createToken('AuthToken')->accessToken;
//             return response()->json(['token' => $token]);
//         } else {
//             // Authentication failed
//             return response()->json(['error' => 'Unauthorized'], 401);
//         }
//     }
// }

