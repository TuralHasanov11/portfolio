<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function sendMail(Request $request){
        $data = Validator::make($request->all(), [
            'name'=>'required|string|min:3|max:50',
            'email'=>'required|email',
            'message'=>'required|string',
        ]);

        if ($data->fails()) {
            return redirect(route('home').'#contact')
                        ->withErrors($data)
                        ->withInput();
        }
        

        Mail::to('hasanovtural11@gmail.com')->send(new ContactMail($request->only(['name','email','message'])));

        return redirect(route('home').'#contact')->withSuccess('Your message was sent successfully!');

    }
}
