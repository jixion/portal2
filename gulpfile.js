// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var eslint = require('gulp-eslint');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');

var coveralls = require('gulp-coveralls');
const jasmine = require('gulp-jasmine');
var Server = require('karma').Server;
var sourceGlob = 'app/!(bower_components|files|images)/!(*_test).js';

var express = require('express');
var api = express();
var request = require('request');

var env = process.env || {};


var today = function () {
    return new Date().toISOString().substring(0, 10);
};

api.get('/apod', function (req, res) {
    request({
        uri: 'https://api.nasa.gov/planetary/apod',
        qs: {
            api_key: env.NASA
        }
    }).pipe(res);
});

api.get('/neo', function (req, res) {
    request({
        uri: 'https://api.nasa.gov/neo/rest/v1/feed',
        qs: {
            start_date: today(),
            end_date: today(),
            api_key: env.NASA
        }
    }).pipe(res);
});

api.get('/owm*', function (req, res) {
    var queryString = req.params[0].substr(1).split('/').join(',');
    request({
        uri: 'http://api.openweathermap.org/data/2.5/weather',
        qs: {
            q: queryString,
            APPID: env.OWM
        }
    }).pipe(res);
});

api.listen(3000);

gulp.task('coveralls', ['test'], function() {
    return gulp.src('coverage/report-lcov/lcov.info')
        .pipe(coveralls());
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src(sourceGlob)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([sourceGlob, 'app/app.js', 'app/components/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('app/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('/*.js', ['lint', 'scripts']);
    gulp.watch('about_me/*.js', ['lint', 'scripts']);
    gulp.watch('components/*.js', ['lint', 'scripts']);
    gulp.watch('components/**/*.js', ['lint', 'scripts']);
    gulp.watch('resume/*.js', ['lint', 'scripts']);
    gulp.watch('space/*.js', ['lint', 'scripts']);
    gulp.watch('weather/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('test', function(done) {
    return new Server.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function() {
        done();
    });
});

gulp.task('connect', function() {
    connect.server({
        root: ['./app'],
        port: 80,
        // fallback: 'app/index.html',
        // livereload: true,
        middleware: function(connect, opt) {
            return [
                proxy('/apod', {
                    target: 'http://localhost:3000',
                    changeOrigin: true
                }),
                proxy('/neo', {
                    target: 'http://localhost:3000',
                    changeOrigin: true
                }),
                proxy('/iss', {
                    target: 'http://api.open-notify.org',
                    changeOrigin: true
                }),
                proxy('/owm', {
                    target: 'http://localhost:3000',
                    changeOrigin: true
                })
            ]
        }

    });
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'connect']);