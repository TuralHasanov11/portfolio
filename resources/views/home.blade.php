@extends('layouts.app')

@section('content')
<section id="top" class="one dark cover">
    <div class="container">

        <header>
            <h2 class="alt">Hi! I'm <strong>{{config('app.profile.name')}}</strong> <span style="margin-left: 0.3em"><i class="fa fa-code" aria-hidden="true"></i>
            </span></h2>
            <p></p>
        </header>

        <footer>
            <a href="#portfolio" class="button scrolly">Projects</a>
        </footer>

    </div>
</section>


<section id="skills" class="two">
    <div class="container">

        <header>
            <h2>Skills</h2>
        </header>

        <div class="row">
            @foreach (config('app.profile.skills') as $key => $skill)
                @if ($key % 2 == 0)
                <div class="col-2 col-6-mobile">
                    <article class="item skill">
                        <div class="image fit"><img src="{{asset('images/skills/'.$skill['image'])}}" alt="{{$skill['image']}}"  /></div>
                        <header style="margin-top:1em;">
                            <h3><div class="image fit">{{$skill['name']}}</div></h3>
                        </header>
                    </article>
              
                @else 
                    <article class="item skill">
                        <div class="image fit"><img src="{{asset('images/skills/'.$skill['image'])}}" alt="{{$skill['image']}}"  /></div>
                        <header style="margin-top:1em;">
                            <h3><div class="image fit">{{$skill['name']}}</div></h3>
                        </header>
                    </article>
                </div>
                @endif
            @endforeach
        </div>
    
    </div>
</section>

<section id="portfolio" class="three">
    <div class="container">

        <header>
            <h2>Projects</h2>
        </header>

        <p>Real and demo projects (websites)</p>

        <div class="row">
            @foreach ($sites as $key => $site)
                <div class="col-4 col-12-mobile">
                    <article class="item site">
                        <a href="{{$site->url}}" class="image fit" target="_blank"><img src="{{asset($site->image)}}" alt="{{$site->image}}"  /></a>
                        <header>
                            <h3 ><a href="{{$site->url}}" class="image fit" target="_blank">{{$site->name}}</a></h3>
                        </header>
                    </article>
                    
                </div>
            @endforeach
        </div>

    </div>
    <div class="container" style="margin: 2em auto;">
        {{$sites->links()}}
    </div>
</section>

<section id="about" class="four">
    <div class="container">

        <header>
            <h2>About Me</h2>
        </header>

        <div  class="image featured"><img src="{{asset('images/core-images/about.jpg')}}" alt="" /></div>

        <p>
            Extremely motivated to constantly develop my skills and grow professionally.
            I have been learning programming for 3 years, I have made several demo projects. 
            I've never stopped engaging my passion to help others and solve problems. 
            I am confident in my ability to deal with different projects. In addition, I am attendee of web developer meetups and hackathons.
            As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, 
            and my mission-driven work ethic to literally change the world. 
        </p>

    </div>
</section>



<section id="contact" class="five">
    <div class="container">

        <header>
            <h2>Contact</h2>
        </header>

        <p><b>E-mail address:</b> {{config('app.profile.email')}}</p>

        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        @if (session('success'))
            <div class='alert alert-success'>
                {{session('success')}}
            </div>
         @endif
    
        <form method="post" action="{{route('send-mail')}}">
            @csrf
            <div class="row">
                <div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" value="{{old('name')}}"  required/></div>
                <div class="col-6 col-12-mobile"><input type="email" name="email" placeholder="Email" value="{{old('email')}}"  required/></div>
                <div class="col-12">
                    <textarea name="message" placeholder="Message" required>{{old('message')}}</textarea>
                </div>
                <div class="col-12">
                    <button type="submit">Send message</button>
                </div>
            </div>
        </form>

    </div>
</section>
@endsection