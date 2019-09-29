
const gulp = require('gulp');

const concat = require('gulp-concat');

const cleanCSS = require('gulp-clean-css');

const del = require('del');

const browserSync = require('browser-sync').create();

const imagemin = require('gulp-imagemin');

const rename = require('gulp-rename');

const htmlmin = require('gulp-htmlmin');

const uglify = require('gulp-uglify');

const styleFiles = [
   './src/css/bootstrap-grid.css',
   './src/css/jquery.scrollbar.css',
   './src/css/prettify.css',
   './src/css/scroll-style.css',
   './src/css/style.css'
]

const scriptFiles = [
   './src/js/jquery.js',
   './src/js/prettify.js',
   './src/js/jquery.scrollbar.js',
   './src/js/scroll.js',
   './src/js/add_int.js',
   './src/js/localstorage.js',
   './src/js/tabs.js'
]
const standartInt = [
   './src/js/standart_int.js'
]


gulp.task('styles-compress', () => {

   return gulp.src(styleFiles)
      .pipe(concat('style.css'))
      .pipe(cleanCSS({
         level: 2
      }))   
      .pipe(rename({
         suffix: '.min'
      }))   
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream());
});
 gulp.task('js-compress', function () {
   return gulp.src(scriptFiles)  
     .pipe(concat('main.js'))
     .pipe(rename({
      suffix: '.min'
   }))
     .pipe(uglify())
     .pipe(gulp.dest('./build/js'))
 });
  gulp.task('js-compress-standartInt', function () {
   return gulp.src(standartInt)  
     .pipe(concat('standart_int.js'))
     .pipe(uglify())
     .pipe(gulp.dest('./build/js'))
 });
gulp.task('del', () => {
   return del(['build/*'])
});
gulp.task('img-compress', ()=> {
   return gulp.src('./src/img/**')
   .pipe(imagemin({
      progressive: true
   }))
   .pipe(gulp.dest('./build/img/'))
});
gulp.task('html-compress', () => {
   return gulp.src('./src/template/*')
     .pipe(htmlmin({ collapseWhitespace: true }))
     .pipe(gulp.dest('./build'));
 });

gulp.task('watch', () => {
   browserSync.init({
      server: {
         baseDir: "./build"
      }
   });
   
   gulp.watch('./build/src/img/**', gulp.series('img-compress'))
   
   gulp.watch('./build/src/css/**/*.css', gulp.series('styles-compress'))
   
   gulp.watch('./build/src/js/**/*.js', gulp.series('js-compress'))
   
   gulp.watch("./build/*.html").on('change', browserSync.reload);
   
});


gulp.task('default', gulp.series('del', gulp.parallel('styles-compress', 'js-compress','js-compress-standartInt', 'img-compress','html-compress'), 'watch'));
