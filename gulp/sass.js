'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	minifycss = require('gulp-minify-css'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	csscomb = require('gulp-csscomb');

gulp.task('sass', function(){
	gulp.src('src/scss/*.scss')
	.pipe(sass())
		.pipe(csscomb())
	.pipe(autoprefixer())
		.pipe(sourcemaps.init())
	.pipe(concat('style.css'))
	.pipe(gulp.dest('dist/css/'))
	.pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
})

