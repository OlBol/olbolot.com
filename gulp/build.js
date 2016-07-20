'use strict'

var gulp = require('gulp'),
    config = require('./config'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'pug',
        'sass',
        'js',
        'img',
        'svgSprite',
        callback);

    gulp.src(config.pathTo.src.fonts)
        .pipe(gulp.dest(config.pathTo.dist.fonts));
});