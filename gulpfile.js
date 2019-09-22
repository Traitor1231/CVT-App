
const gulp = require('gulp');

const concat = require('gulp-concat');

const cleanCSS = require('gulp-clean-css');

const del = require('del');

const browserSync = require('browser-sync').create();

const imagemin = require('gulp-imagemin');

const rename = require('gulp-rename');


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


gulp.task('styles', () => {

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

gulp.task('scripts', () => {
 
   
   return gulp.src(scriptFiles)
      
      .pipe(concat('main.js'))
      
      .pipe(gulp.dest('./build/js'))
      .pipe(browserSync.stream());
      
});
gulp.task('font', function () {
 return gulp.src('./src/css/font/**/*')
    .pipe(gulp.dest('build/css/font'));
});
gulp.task('del', () => {
   return del(['build/*'])
});

 gulp.task('js-compress', function () {
   return gulp.src(scriptFiles)
       .pipe(concat('main.js'))
       .pipe(gulp.dest('build/js'));
});
gulp.task('img-compress', ()=> {
   return gulp.src('./src/img/**')
   .pipe(imagemin({
      progressive: true
   }))
   .pipe(gulp.dest('./build/img/'))
});
gulp.task('html:build', function () {
   return gulp.src('./src/template/*') 
      
       .pipe(gulp.dest('./build')) 
});

gulp.task('watch', () => {
   browserSync.init({
      server: {
         baseDir: "./build"
      }
   });
   
   gulp.watch('./build/src/img/**', gulp.series('img-compress'))
   
   gulp.watch('./build/src/css/**/*.css', gulp.series('styles'))
   
   gulp.watch('./build/src/js/**/*.js', gulp.series('js-compress'))
   
   gulp.watch("./build/*.html").on('change', browserSync.reload);
   
});


gulp.task('default', gulp.series('del', gulp.parallel('styles', 'js-compress', 'img-compress','font','html:build'), 'watch'));
