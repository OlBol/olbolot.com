'use strict';

var gulp = require('gulp'),
    config	= require('./config'),
    imagemin = require('gulp-imagemin'),
    pngQuant = require('imagemin-pngquant'),
    plumber	= require('gulp-plumber'),
    server	= require('browser-sync');


gulp.task('img', function () {
    gulp.src(config.pathTo.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngQuant()],
            interlaced: true
        }))
        .pipe(gulp.dest(config.pathTo.dist.img))
        .pipe(server.reload({stream: true}));
});