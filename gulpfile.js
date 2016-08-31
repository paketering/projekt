var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var  maps = require('gulp-sourcemaps'); // map orientering för leta upp cod i dev-tool
var del = require('del');             // radera filer
var rename = require('gulp-rename');   // för att behålla snygga versionen av concat när man gör uglify


gulp.task('sass', function() {

  return gulp.src('app/sass/style.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))  // skriver maps filen i folder den beffiner sig i
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream:true}))

});

gulp.task("concatScripts", function() { //lägger ihop alla scripts till en concat.js
    return gulp.src([
        'app/js/*.js'
        ])
    .pipe(maps.init())
    .pipe(concat('concat.js'))  // snygag versionen av js filer
    .pipe(maps.write('./'))
    .pipe(gulp.dest('public/scripts'));
});

gulp.task("uglify", ["concatScripts"], function() { //tar bort whitespace,preformance related(not necisary for development)
  return gulp.src("public/scripts.concat.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))       // uglify versionen
    .pipe(gulp.dest('public/scripts'));
});




gulp.task("production", ['uglify', 'sass'],function(){ //lägger ihop fler tasks
  return gulp.src(['public/scripts/all.min.js','public/index.html','public/css/style.css'],{base:'./'})  // compila ihop hella appen i en färdig mapp 'dist'
                    .pipe(gulp.dest('dist'));
});

gulp.task('clean',function(){ // delita all filer som var compilade by gulp
  del(['dist','public/css/style.css*','public/scripts/all.*.js*']);
})





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
