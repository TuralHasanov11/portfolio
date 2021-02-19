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
								<li><a href="{{route('home')}}"><i class="solid fa fa-home" aria-hidden="true"></i>Intro</a></li>
								<li><a href="{{route('admin.sites.index')}}" class="@if (request()->routeIs('admin.sites.index') || request()->routeIs('admin.sites.show'))
                                    active
                                @endif"><i class="fa fa-superpowers" aria-hidden="true"></i>Sites</a></li>
								<li>
									<form method="POST" action="{{ route('logout') }}">
										@csrf
			
										<button class="logout" type="submit">
											 {{ __('Log out') }}
										</button>
									</form>
								</li>
							</ul>
						</nav>

					</div>

			</div>

			<div id="main">

					@yield('content')

			</div>

			<div id="footer">
                <ul class="copyright">
                    <li>&copy; Untitled. All rights reserved.</li>
                </ul>
			</div>


	</body>
</html>
