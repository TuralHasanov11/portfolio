<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
   
    public function register()
    {
        //
    }

 
    public function boot()
    {
        if(env('APP_ENV') !== 'local'){
            URL::forceScheme('https');
        }
        
    }
}
