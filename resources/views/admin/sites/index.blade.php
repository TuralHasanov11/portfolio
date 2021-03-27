@extends('layouts.admin')

@section('content')
<section id="top" class="one dark cover">
    <div class="container">

        <header>
            <h2 class="alt">Sites</h2>
        </header>

        <footer>
            <a href="#addSite" class="button scrolly">Add site</a>
        </footer>

    </div>
</section>

<section id="addSite" class="two">
    <div class="container">

        @if (session('success'))
            <div class='alert alert-success'>
                {{session('success')}}
            </div>
        @endif

        <header>
            <h2>Add site</h2>
        </header>

        

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="post" action="{{route('admin.sites.store')}}" enctype="multipart/form-data">
            <div class="row">
                <div class="col-6 col-12-mobile"><input type="text" name="name" value="{{old('name')}}" placeholder="Name" /></div>
                <div class="col-6 col-12-mobile"><input type="text" name="url" value="{{old('url')}}" placeholder="Url" /></div>
                <div class="col-12">
                    <input type="file" name="image" id="">
                </div>
                <div class="col-12">
                    <button type="submit">Add site</button>
                </div>
            </div>
            @csrf
        </form>

    </div>
</section>

<section id="sites" class="three">
    <div class="container">

        <header>
            <h2>Sites</h2>
        </header>
            
            <table class="table">
                <thead class="">
                    <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Url</th>
                    <th scope="col">Image</th>
                    <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($sites as $site)
                    <tr class="align-middle">
                    <th scope="row">{{$site->id}}</th>
                    <td>{{$site->name}}</td>
                    <td><a href="{{$site->url}}">{{$site->url}}</a></td>
                    <td><img src="{{asset($site->image)}}" alt="{{$site->image}}" width="50" height="50"></td>
                    <td><a href="{{route('admin.sites.show',['site'=>$site])}}">Edit</a></td>
                    </tr>
                    @endforeach
                    
                </tbody>
            </table>

    </div>
    <div class="container" style="margin: 2em auto;">
        {{$sites->links()}}
    </div>
</section>
@endsection