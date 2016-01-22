var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');

// gulp.task('default', function() {
//   // place code for your default task here

//   gulp.src([
//     /*js files*/
//     "client/bower_components/jquery/dist/jquery.js",
//     "client/bower_components/angular/angular.js",
//     "client/bower_components/json3/lib/json3.js",
//     "client/bower_components/bootstrap/dist/js/bootstrap.js",
//     "client/bower_components/angular-resource/angular-resource.js",
//     "client/bower_components/angular-route/angular-route.js"
//   ])
//   .pipe( uglify() )
//   .pipe(concat('plugins.js'))
//   .pipe( uglify() )
//   .pipe(gulp.dest('./client/builds/'));

//   //Controllers
//   gulp.src([
//     /*js files*/
//     "client/scripts/app.js",
//     "client/scripts/lb-services.js",
//     "client/scripts/controllers/header.js",
//     "client/scripts//controllers/login.js",
//     "client/scripts//controllers/main.js",
//     "client/scripts//controllers/folder.js",
//     "client/scripts//controllers/folderdetails.js"
//   ])
//   .pipe( uglify() )
//   .pipe(concat('controllers.js'))
//   .pipe( uglify() )
//   .pipe(gulp.dest('./client/builds/'));


// });

var assetDir = './client/';

gulp.task('usemin', function () {
  return gulp.src(['./**/*.html'], { cwd: assetDir })
    .pipe(usemin({
    	assetsDir : 'client',
      css: [minifyCss(), 'concat'],
      js: [uglify(), 'concat']
      //html: [minifyHtml({ empty: true,conditionals: true,spare:true })],
     // js: [uglify(), rev()],
     // inlinejs: [uglify()],
     // inlinecss: [minifyCss(), 'concat']
    }))
    .pipe(gulp.dest( 'builds/'));
});


gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src(['./views/*.html'], { cwd: assetDir })
    .pipe(assetpaths({

      }))
    .pipe(minifyHtml(opts))
    .pipe(gulp.dest('./builds/views'));
});