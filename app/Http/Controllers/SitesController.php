<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Site;
use Illuminate\Support\Str;

class SitesController extends Controller
{
   
    public function index()
    {
        return view('admin.sites.index',[
                'sites' => Site::latest()->paginate(6)->fragment('sites')
            ]);
    }

    
    public function store(Request $request)
    {
        $data = $request->validate([
                'name'=>'required|string',
                'url'=>'required|url',
                'image'=>'required|file|max:1999'
            ]);
        
        if($request->has('image')){
            $fileName=$data['name'].'.'.$data['image']->extension();
            $fileDirectory = 'images/sites/'.$fileName;
            $request->image->move(public_path('images/sites'),$fileName);
        }

        Site::create([
            'name'=>$data['name'],
            'url'=>$data['url'],
            'image'=>$fileDirectory
        ]);

        return redirect()->route('admin.sites.index')->withSuccess('Site added');
    }

   
    public function show(Site $site)
    {
        return view('admin.sites.show', ['site'=>$site]);
    }

    
    public function update(Request $request, Site $site)
    {
        $data = $request->validate([
            'name'=>'required|string',
            'url'=>'required|url',
            'image'=>'nullable|file|max:1999'
        ]);
    
        if($request->has('image')){
            $fileName=$data['name'].'.'.$data['image']->extension();
            $fileDirectory = 'images/sites/'.$fileName;
            $request->image->move(public_path('images/sites'),$fileName);
            if(file_exists(public_path($site->image))){
                unlink(public_path($site->image));
            }
        }

        $site->update([
            'name'=>$data['name'],
            'url'=>$data['url'],
            'image'=>$fileDirectory
        ]);

        return redirect()->route('admin.sites.show',['site'=>$site])->withSuccess('Site updated');
    }

    
    public function destroy(Site $site)
    {
        if($site->delete()){
            if(file_exists(public_path($site->image))){
                unlink(public_path($site->image));
            }
            return redirect()->route('admin.sites.index')->withSuccess('Site deleted');
        }

        return redirect()->route('admin.sites.show',['site'=>$site])->with('error','Site not deleted');
    }
}
