<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterAccountRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
  public function register(RegisterAccountRequest $registerAccountRequest)
  {
    $user = User::create($registerAccountRequest->validated());

    return response()->json($user);
  }

  public function login(LoginRequest $loginRequest)
  {
    $loginRequest->validated();

    $user = User::where('name', $loginRequest->name)
      ->firstWhere('password', $loginRequest->password);

    return response()->json(
      $user ? [
        'message' => 'success',
        'token' => $user->createToken('auth-token')->plainTextToken,
      ] : [
        'message' => 'user/password salah'
      ]
    );
  }
}
