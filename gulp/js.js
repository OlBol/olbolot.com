'use strict';

var gulp = require('gulp'),
    config	= require('./config'),
    concat	= require('gulp-concat'),
    server	= require('browser-sync'),
    uglify	= require('gulp-uglify');

gulp.task('js', function() {
     gulp.src(config.pathTo.src.js)
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(config.pathTo.dist.js))
         .pipe(server.reload({stream:true}));
});