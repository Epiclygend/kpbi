<?php

namespace App\Http\Controllers\KPBI;

use App\Http\Controllers\Controller;
use App\User;
use App\KPBI;
use Illuminate\Http\Request;

use function PHPSTORM_META\map;

class ProfileAPIController extends Controller
{
    public function getProfile(Request $request)
    {
        if ($user = User::find($request->id)) {
            return $user->kpbi_profile;
        }

        return response(['error' => 'didn\'t find any match user'], 404);
    }

    public function getAllProfiles()
    {
        $users = User::all();

        $members = $users->map(function ($user) {
            return $user->kpbi_profile;
        });

        $fullfilledData = $members->filter(function($member) {
            return !(KPBI::requiredDataValidator($member->attributesToArray())
                ->fails());
        });

        return array_values($fullfilledData->toArray());
    }
}
