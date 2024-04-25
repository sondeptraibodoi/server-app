<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function authentication(Request $request)
    {
        $request->validate([
            'email' => 'required|email:rfc,dns',
            'password' => 'required'
        ], [
            'email.required' => 'Bạn chưa nhập địa chỉ email',
            'email.email' => 'Đây không phải là email',
            'password.required' => 'Bạn chưa nhập mật khầu'
        ]);

        $user = $this->checkUser($request);
        dd(1);


    }
    public function checkUser(Request $request)
    {
        $query = $request->only('email', 'password');
        dd($query);

    }
}
