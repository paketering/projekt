var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var  maps = require('gulp-sourcemaps'); // map orientering för leta upp cod i dev-tool
var del = require('del');             // radera filer
var rename = require('gulp-rename');   // för att behålla snygga versionen av concat när man gör uglify

//Development tasks som vi vill ha
// Sass, browerfiy, watch, browser-sync

//Production tasks som vi vill andvända
// uglify,build task för färdig produkt,jsdoc(dokumention verktyg)

gulp.task('sass', function() {
  return gulp.src('app/sass/style.scss')
    .pipe(maps.init()) // startar source maps
    .pipe(sass())
    .pipe(maps.write('./'))  // skriver maps filen i folder den beffiner sig i
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream:true}))// refreshar webbläsare

});

gulp.task('browserify', function(){
   return browserify({entries:'./app/app.js',debug:true})// säger åt browserify vilket fil den ska starta i,kör debug istället för source-maps i
   .bundle()//slår samman allt i en fin x.js
   .pipe(source('main.js'))// x.js = main.js
   .pipe(gulp.dest('./public/scripts/'))// sparar main.js i valda mappen
   .pipe(browserSync.reload({
      stream: true
   }));//reloadar webbläsare
});

gulp.task('dev', ['sass','browserify','browser-sync'],function() { //kollar efter förändringar i dessa filer och kör de tasks som är kopplade till watch funktionenrna. kör browserifyoch sass tasks när gulp watch startar.startar alla tasks för development med gulp.dev
  gulp.watch('app/sass/*.scss', ['sass']);
  gulp.watch('app/**/*.js', ['browserify']);
  gulp.watch('public/index.html').on('change',browserSync.reload);
});

gulp.task('browser-sync', function() {//inställningar för livereload
  browserSync({
   //  server: {
   //    baseDir: "public"//vart den ska leta efter index.html filen
   //  }
   proxy:'localhost:3000'
  });
});

gulp.task("uglify", function() { //tar bort whitespace,preformance related(not necisary for development)
  return gulp.src("public/scripts/main.js")
    .pipe(uglify())
    .pipe(rename('main.min.js'))       // uglify versionen
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('sassp', function() {
  return gulp.src('app/sass/style.scss')
    .pipe(maps.init()) // startar source maps
    .pipe(sass({outputStyle:'compressed'}))// minifierar css koden för dist mappen och körs i gulp.task production
    .pipe(maps.write('./'))  // skriver maps filen i folder den beffiner sig i
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream:true}))// refreshar webbläsare

});

gulp.task("production", ['uglify', 'sassp'],function(){ //lägger ihop fler tasks
  return gulp.src(['public/scripts/main.min.js','public/index.html','public/css/style.css'],{base:'./public'})
   .pipe(gulp.dest('dist'));  //compila ihop hella appen i en färdig mapp 'dist'
});

gulp.task('clean',function(){ // delita all filer som var compilade by gulp
  del(['dist','public/css/style.css*','public/scripts/main*.js*']);
});
