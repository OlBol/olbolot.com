'use strict'

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('server', function () {
    browserSync.init({
        port: 9999,
        tunnel: false,
        server: './dist'
    });
});