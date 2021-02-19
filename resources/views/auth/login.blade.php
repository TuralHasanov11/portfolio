@extends('layouts.app')

@section('content')
    
<section id="top" class="one dark cover">
    <div class="container">

        <header>
            <h2>Login</h2>
        </header>

    </div>
</section>

<section id="loginForm" class="two">
    <div class="container">

        
        
        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="row">
                <div class="col-6 col-12-mobile">
                    <x-label for="email" :value="__('Email')" />
                    <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
                </div>
                <div class="col-6 col-12-mobile">
                    <x-label for="password" :value="__('Password')" />

                    <x-input id="password" class="block mt-1 w-full"
                        type="password"
                        name="password"
                        required autocomplete="current-password" />
                </div>
                <div class="col-12">
                    <x-button>
                        {{ __('Log in') }}
                    </x-button>        
                </div>
            </div>

        </form>

    </div>
</section>
@endsection