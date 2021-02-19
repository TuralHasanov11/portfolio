<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Styles -->
		<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body class="is-preload">

			<div id="header">

				<div class="top">

						<div id="logo">
							<span class="image avatar48"><img style="border-radius: 50%" src="{{asset('images/core-images/profile.PNG')}}" alt="" /></span>
							<h1 id="title">{{ config('app.profile.name') }}</h1>
							<p>{{ config('app.profile.job') }}</p>
						</div>

						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link" class="scrollable" ><i class="solid fa fa-home" aria-hidden="true"></i>Intro</a></li>
								<li><a href="#skills" id="skills-link" class="scrollable" ><i class="fa fa-superpowers" aria-hidden="true"></i>Skills</a></li>
								<li><a href="#portfolio" id="portfolio-link" class="scrollable" ><i class="solid fa fa-th" aria-hidden="true"></i>Projects</a></li>
								<li><a href="#about" id="about-link" class="scrollable" ><i class="solid fa fa-user" aria-hidden="true"></i>About Me</a></li>
								<li><a href="#contact" id="contact-link" class="scrollable" ><i class="solid fa fa-envelope" aria-hidden="true"></i>Contact</a></li>
								@if (auth()->user() && auth()->user()->isAdmin())
									<li><a href="{{route('admin.sites.index')}}"><i class="fa fa-superpowers" aria-hidden="true"></i>Sites</a></li>
									<li>
										<form method="POST" action="{{ route('logout') }}">
											@csrf
				
											<button class="logout" type="submit">
												 {{ __('Log out') }}
											</button>
										</form>
									</li>
								@endif
							</ul>
						</nav>

				</div>

				<div class="bottom">

						<ul class="icons">
							<li><a href="{{config('app.profile.facebook')}}" target="_blank" class="icon"><i class="fa fa-facebook-official" aria-hidden="true"></i><span class="label">Facebook</span></a></li>
							<li><a href="{{config('app.profile.github')}}" class="icon" target="_blank"><i class="fa fa-github" aria-hidden="true"></i><span class="label">Github</span></a></li>
							<li><a href="mailto:{{config('app.profile.email')}}" title="{{config('app.profile.email')}}"  class="icon"><i class="fa fa-envelope" aria-hidden="true"></i><span class="label">Email</span></a></li>
						</ul>

				</div>

			</div>

			<div id="main">

					@yield('content')

			</div>

			<div id="footer">
                <ul class="copyright">
                    <li>&copy; All rights reserved.</li>
                </ul>
			</div>


	</body>
</html>
