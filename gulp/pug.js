'use strict'

var gulp = require('gulp'),
	config = require('./config'),
	pug = require('gulp-pug'),
	server	= require('browser-sync');

gulp.task('pug', function(){
	gulp.src(config.pathTo.src.pug)
		.pipe(pug({
			pretty: true,
		}))
		.pipe(gulp.dest(config.pathTo.dist.pug))
		.pipe(server.reload({stream:true}));
});