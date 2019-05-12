var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var styles = require('./styles');

gulp.task('cssInject', cssInject);
function cssInject() {
  return gulp.src('./temp/styles/styles.css')
    .pipe(browserSync.stream());
}

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: './',
    }
  });

  watch('./index.html', function() {
    browserSync.reload();
  });

  watch('./assets/styles/**/*.css', function() {
    styles();
    cssInject();
  });
});