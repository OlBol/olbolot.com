'use strict'

var gulp = require('gulp'),
	debug = require('gulp-debug');

gulp.task('assets', function() {
  return gulp.src('src/**', {since: gulp.lastRun('assets')})
//sinse позволяет найти только те файлы, которые изменились с заданной даты
//команда lastRun возвращает дату последнего запуска этой задачи
      .pipe(gulp.dest('dist'));
});