
const gulp = require('gulp');

const concat = require('gulp-concat');

const cleanCSS = require('gulp-clean-css');

const del = require('del');

const browserSync = require('browser-sync').create();

const imagemin = require('gulp-imagemin');

const rename = require('gulp-rename');

const htmlmin = require('gulp-htmlmin');

const webpack = require('webpack-stream');

const gulpif = require('gulp-if');

const styleFiles = [
   './src/css/bootstrap-grid.css',
   './src/css/jquery.scrollbar.css',
   './src/css/prettify.css',
   './src/css/scroll-style.css',
   './src/css/style.css'
]

let isDev = false;
let isProd = !isDev;

let WebConfig = {
    output:{
      filename: 'main.min.js'
    },
    
    module: {
       
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval-source-map' : 'none'
};

gulp.task('styles-compress', () => {

   return gulp.src(styleFiles)
      .pipe(concat('style.css'))
      .pipe(gulpif(isProd, cleanCSS({
         level: 2
      })))   
      .pipe(rename({
         suffix: '.min'
      }))   
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream());
});
 gulp.task('js-compress', () => {
   return gulp.src('./src/js/index.js')  
     .pipe(webpack(WebConfig))
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
     .pipe(gulpif(isProd,htmlmin({ collapseWhitespace: true })))
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


gulp.task('default', gulp.series('del',gulp.parallel('styles-compress', 'js-compress', 'img-compress','html-compress'),'watch'));
