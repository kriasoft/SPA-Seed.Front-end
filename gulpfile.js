// For more information on how to configure Gulp.js build system, please visit:
// https://github.com/gulpjs/gulp/blob/master/docs/API.md

'use strict';

var gulp  = require('gulp');
var clean = require('gulp-clean');
var less  = require('gulp-less');
var gutil = require('gulp-util');

// Clean up
gulp.task('clean', function () {
    return gulp.src(['./build/**', '!build'], {read: false}).pipe(clean());
});

// Copy public/static files
gulp.task('public', ['clean'], function () {
    return gulp.src('./public/**').pipe(gulp.dest('./build'));
});

// Copy vendor specific files
gulp.task('vendor', ['clean'], function () {
    return gulp.src('./bower_components/jquery/dist/**').pipe(gulp.dest('./build/vendor'));
});

// LESS stylesheets
gulp.task('styles', ['clean'], function () {
    return gulp.src('./src/app.less').pipe(less()).pipe(gulp.dest('./build'));
});

// JavaScript code
gulp.task('scripts', ['clean'], function () {
    return gutil.log('TODO: Add a task for bundling JavaScript code');
});

// Build the app
gulp.task('build', ['public', 'vendor', 'styles', 'scripts']);

// Start HTTP Server
gulp.task('serve', ['build'], function () {
    return gutil.log('TODO: Add a task for starting an HTTP server');
});

// The default task
gulp.task('default', ['serve']);