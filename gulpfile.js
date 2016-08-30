var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function() {

  return gulp.src('app/sass/style.scss')

    .pipe(sass())
    .pipe(gulp.dest('public/css'));

});

gulp.task('watch', function() {

  gulp.watch('app/sass/*.scss', ['sass']);

});
