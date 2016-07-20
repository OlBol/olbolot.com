'use strict'

var gulp = require('gulp'),
	config = require('./config'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	minifycss = require('gulp-minify-css'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	csscomb = require('gulp-csscomb'),
	server = require('browser-sync');

gulp.task('sass', function(){
	gulp.src(config.pathTo.src.styles)
	.pipe(sass())
		.pipe(csscomb())
	.pipe(autoprefixer())
		.pipe(sourcemaps.init())
	.pipe(concat('style.css'))
	.pipe(gulp.dest(config.pathTo.dist.styles))
	.pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.pathTo.dist.styles))
	.pipe(server.reload({stream:true}));
});