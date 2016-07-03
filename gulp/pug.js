'use strict'

var gulp = require('gulp'),
	pug = require('gulp-pug');

gulp.task('pug', function(){
	gulp.src('./src/pug/*.pug')
		.pipe(pug({
			pretty: true,
		}))
		.pipe(gulp.dest('./dist'));
});