const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const filter = require('gulp-filter');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');

const build = () => {
  return src('./scss/*.scss')
    .pipe(plumber())
    .pipe( sourcemaps.init() )
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
      .on( 'error', sass.logError )
    )
    .pipe(
      postcss( [ autoprefixer() ] ) // configurar en .browserlistrc
    )
    .pipe( sourcemaps.write('.') )
    .pipe( dest( './dist/css/' ) )
};

const minify = () => {
  const cssFilter = filter(['dist/css/*.css'], { restore: true });
  const sourcemapFilter = filter(['dist/css/*.css.map'], { restore: true });

  return src( [ 'dist/css/*.css', '!dist/css/*.min.css' ] )
    .pipe(plumber())
    .pipe( sourcemapFilter )
    .pipe( dest( './dist/css/' ) )
    .pipe( sourcemapFilter.restore )

    .pipe( cssFilter )
    .pipe( dest( './dist/css/' ) )
    .pipe( sourcemaps.init( { loadMaps: true } ) )
    
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( cleanCSS() )
    .pipe( sourcemaps.write('.') )
    .pipe( dest( './dist/css/' ) )
    .pipe( cssFilter.restore )
};

const watchcss = () => {
  watch(
    [ './scss/**/*.scss' ],
    series( build, minify )
  );
};

exports.build = build;
exports.minify = minify;
exports.watchcss = watchcss;

exports.default = series( build, minify );