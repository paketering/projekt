var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function() {

  return gulp.src('app/sass/style.scss')

    .pipe(sass())
    .pipe(gulp.dest('public/css'));

});

gulp.task('uglify', function() {

	return gulp.src('app/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/scripts'));

});

gulp.task('watch', function() {

  gulp.watch('app/sass/*.scss', ['sass']);
  gulp.watch('app/js/*.js', ['uglify']);


});
