@extends('layouts.admin')

@section('content')
<section id="top" class="one dark cover">
    <div class="container">

        <header>
            <h2 class="alt">{{$site->name}}</h2>
        </header>

    </div>
</section>

<section class="two">
    <div class="container">

        <header>
            <h2>Edit site</h2>
        </header>

        @if (session('success'))
            <div class='alert alert-success'>
                {{session('success')}}
            </div>
        @endif

        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form style="margin-bottom: 2em" method="post" action="{{route('admin.sites.update',['site'=>$site])}}" enctype="multipart/form-data">
            <div class="row">
                <div class="col-6 col-12-mobile"><input type="text" name="name" value="{{$site->name}}" placeholder="Name" /></div>
                <div class="col-6 col-12-mobile"><input type="text" name="url" value="{{$site->url}}" placeholder="Url" /></div>
                <div class="col-12">
                    
                    <input type="file" name="image" id="">
                    <img style="width: 10em; height: 10em; margin:1em auto" src="{{asset($site->image)}}" alt="{{$site->image}}"  />
                    <p style="text-align: center">{{$site->image}}</p>
                </div>
                <div class="col-12">
                    <button type="submit">Edit site</button>
                </div>
            </div>
            @method('PUT')
            @csrf
        </form>

        <hr>

        <form style="margin-top: 2em" method="post" action="{{route('admin.sites.destroy',['site'=>$site])}}">
            <button type="submit" class="btn-danger">Delete site</button>
            @method('DELETE')
            @csrf
        </form>

    </div>
</section>

@endsection