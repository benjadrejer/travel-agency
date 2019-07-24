var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './docs',
    }
  });
});

gulp.task('deleteDistFolder', function() {
  return del('./docs');
});

gulp.task('copyGeneralFiles', function() {
  var pathsToCopy = [
    './assets/**/*',
    '!./assets/images/**',
    '!./assets/scripts/**',
    '!./assets/styles/**',
  ];
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('/docs'));
});

gulp.task('optimizeImages', function() {
  return gulp.src(['./assets/images/**/*', '!./assets/images/icons', '!./assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true,
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('usemin', function() {
  return gulp.src('./index.html')
    .pipe(usemin({
      css: [function() { return rev(); }, function() { return cssnano(); }],
      js: [function() { return rev(); }, function() { return uglify(); }],
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', gulp.series('deleteDistFolder', 'icons', 'styles', 'scripts', 'copyGeneralFiles', 'optimizeImages', 'usemin'));