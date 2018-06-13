let mix = require('laravel-mix')

let buildPath = 'public/build/'
let devUrl = 'studiofire.lo'
mix
  .setPublicPath('public')
  .js('src/js/app.js', buildPath + 'js/')
  .postCss('src/css/app.css', buildPath + 'css/', [
    require('postcss-easy-import'),
    require('postcss-preset-env'),
    require('postcss-css-variables')
  ])
  .browserSync({
    proxy: devUrl,
    files: ['public/index.html', 'src/js/**/*.js', 'src/css/**/*.css']
  })
