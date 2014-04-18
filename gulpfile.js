// For more information on how to configure Gulp.js build system, please visit:
// https://github.com/gulpjs/gulp/blob/master/docs/API.md

'use strict';

var gulp  = require('gulp');
var clean = require('gulp-clean');
var less  = require('gulp-less');
var gutil = require('gulp-util');
var es    = require('event-stream');

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
    // TODO: Copy vendor specific files
});

// LESS stylesheets
gulp.task('styles', ['clean'], function () {
    return gulp.src('./src/app.less').pipe(less()).pipe(gulp.dest('./build'));
});

// HTML files
gulp.task('html', ['clean'], function () {
    return gulp.src('./src/**/*.html').pipe(gulp.dest('./build'));
});

// JavaScript code
gulp.task('scripts', ['clean'], function () {
    var source = require('vinyl-source-stream');
    return require('browserify')({entries: ['./src/app.js'], debug: !gutil.env.production})
        .bundle().pipe(source('app.js')).pipe(gulp.dest('./build'));
});

// Build the app
gulp.task('build', ['public', 'vendor', 'styles', 'scripts', 'html']);

// Launch a basic HTTP Server
gulp.task('server', ['build'], function (next) {
    var fileServer = require('ecstatic')({root: './build', cache: 'no-cache', showDir: true}),
        port = 8000;
    require('http').createServer()
        .on('request', function (req, res) {
            // For non-existent files output the contents of /index.html page in order to make HTML5 routing work
            if (req.url.length > 3 &&
                ['css', 'html', 'ico', 'js', 'png', 'txt', 'xml'].indexOf(req.url.split('.').pop()) == -1 &&
                ['fonts', 'images', 'vendor', 'views'].indexOf(req.url.split('/')[1]) == -1) {
                req.url = '/index.html';
            }
            fileServer(req, res);
        })
        .listen(port, function () {
            gutil.log('Server is listening on ' + gutil.colors.magenta('http://localhost:' + port + '/'));
            next();
        });
});

// The default task
gulp.task('default', ['server']);