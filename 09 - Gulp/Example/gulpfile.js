const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('uglify', () => { // Kreiranje gulp zadatka
    gulp.src('js/**/*.js') // Izvor naše datoteke
        .pipe(uglify()) // Pipeline - transformiranje datoteka u pipeline (pipe)
        .pipe(gulp.dest('build/js'))
});

