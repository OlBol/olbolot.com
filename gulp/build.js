'use strict'

var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'pug',
        'sass',
        callback);
    gulp.src('src/js/*')
    .pipe(gulp.dest('dist/js/'));
    gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img/'));
    gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts/'));
});