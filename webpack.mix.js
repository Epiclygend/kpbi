const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const path = require('path')
require('laravel-mix-purgecss')

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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css', {
        sassOptions: {
            includePaths: [path.resolve(__dirname, 'node_modules')]
        }
    })
    // .sass('resources/sass/page/home.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js')
        ],
    })
    .purgeCss({ enabled: mix.inProduction() })
    .copyDirectory('resources/img', 'public/img')
