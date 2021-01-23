const mix = require('laravel-mix');
require('vuetifyjs-mix-extension');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vuetify()
  .webpackConfig({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'resources': __dirname + '/resources',
        'js': __dirname + '/resources/js',
        'components': __dirname + '/resources/js/components',
        'pages': __dirname + '/resources/js/pages',
      },
    },
  })
