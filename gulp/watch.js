'use strict'

var gulp = require('gulp'),
	config = require('./config'),
	watch = require('gulp-watch'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('watch', function(){
	watch(config.pathTo.watch.styles, function() {
		gulp.start('sass');
	});
	watch(config.pathTo.watch.pug, function() {
		gulp.start('pug');
	});
	watch(config.pathTo.watch.img, function() {
		gulp.start('img');
	});
	watch(config.pathTo.watch.js, function() {
		gulp.start('js');
	});
	watch(config.pathTo.watch.svgSprite, function() {
		gulp.start('svgSprite');
	});
});