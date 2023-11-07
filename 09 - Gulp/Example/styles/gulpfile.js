const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');


gulp.task('uglify', () => { // kreiranje gulp zadatka 
gulp.src('js/**/**/*.js') // izvor naše datoteke 
.pipe(uglify()) // Pipeline - transformiranje datoteka u pipeline (pipe)
.pipe(gulp.dest('build/js'))

});

gulp.task('minify-css', () => {
    gulp.src('styles/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'))
})