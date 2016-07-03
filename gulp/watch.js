'use strict'

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	config = require('./config'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('watch', function(){
	runSequence(
        'clean',
        'build')
	gulp.watch('./src/scss/**/*.scss', ['sass']),
	gulp.watch('./src/pug/**/*.pug', ['pug']);
});