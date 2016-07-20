'use strict';

var gulp = require('gulp'),
    config = require('gulp-config');

module.exports = {
    pathTo: {
        src: {
            pug: './src/pug/*.pug',
            styles: 'src/scss/style.scss',
            js: 'src/js/**/*.js',
            img: ['src/img/**/*.*', '!src/img/sprite/*.*'],
            fonts: 'src/fonts/**/*',
            svgSprite: 'src/img/sprite/*.svg',
        },

        dist: {
            pug: 'dist/',
            styles: 'dist/css',
            img: 'dist/img',
            js: 'dist/js',
            fonts: 'dist/fonts',
            svgSprite: 'dist/img/sprite',
        },

        watch: {
            pug: './src/pug/**/*.*',
            styles: 'src/scss/**/*.*',
            js: 'src/js/**/*.js',
            img: ['src/img/**/*.*', '!src/img/sprite/*.*'],
            svgSprite: 'src/img/sprite/*.svg',
        },

        clean: './dist',
    }
};