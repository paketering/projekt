var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('sass', function() {

  return gulp.src('app/sass/style.scss')

    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream:true}))

});

gulp.task('uglify', function() {

	return gulp.src('app/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/scripts'))


});

gulp.task('watch', function() {

  gulp.watch('app/sass/*.scss', ['sass']);
  gulp.watch('app/js/*.js', ['uglify']);


});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "public"
    }
  });
});

gulp.task('html', function() {
  gulp.src('public/html/*.html')
    .pipe(html())
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('start', ['browser-sync', 'watch']);
