let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/inviteParticipants.js','public/js/ip.js')
    .js('resources/assets/js/rooms.js','public/js/rooms.js')
    .js('resources/assets/js/delete.js','public/js/bbb-delete.js')
    .styles('resources/assets/css/inviteParticipants.css','public/css/ip.css');
// mix.js('resources/assets/js/app.js', 'public/js')
//     .sass('resources/assets/sass/app.scss', 'public/css');