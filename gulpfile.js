const { src, watch, dest } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

const jsBundle = () =>
  src([
    './scripts/*.js',
    '!./scripts/modules/*.js',
  ])
    .pipe(concat('scripts.js'))
    .pipe(dest('dist'));

const scssBundle = () =>
  src('./scss/global.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('./css'));

exports.watch = function () {
  watch('./scss/**/*.scss', scssBundle);
  watch('./scripts/*.js', jsBundle);
};
