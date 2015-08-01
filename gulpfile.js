var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');
var concat = require('gulp-concat');

gulp.task('test', function() {
  return gulp
    .src(['src/**/*.js', 'spec/**/*.js'])
    .pipe(jasmine({
      abortOnFail: true,
      integration: true
    }));
});

gulp.task('default', ['test']);
