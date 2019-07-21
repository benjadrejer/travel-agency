var gulp = require('gulp'),
  webpack = require('webpack');

gulp.task('scripts', scripts);
function scripts() {
  webpack(require('../../webpack.config'), function(error, stats) {
    if (error) {
      console.log(err.toString());
    }
    console.log(stats.toString());
  });
}

module.exports = scripts;