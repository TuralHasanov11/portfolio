<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Site;

class PagesController extends Controller
{
    public function home(){

        return view('home', [ 'sites' => Site::latest()->paginate(6)->fragment('portfolio')]);
    }
}
