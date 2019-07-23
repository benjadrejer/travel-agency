var gulp = require('gulp'),
  webpack = require('webpack'),
  modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./assets/styles/**/*.css', './assets/scripts/**/*.js'])
    .pipe(modernizr({
      options: [
        'setClasses',
      ]
    }))
    .pipe(gulp.dest('./temp/scripts/'));
});

gulp.task('buildScripts', scripts);
function scripts() {
  webpack(require('../../webpack.config'), function(error, stats) {
    if (error) {
      console.log(err.toString());
    }
    console.log(stats.toString());
  });
}

gulp.task('scripts', gulp.series('modernizr', 'buildScripts'));