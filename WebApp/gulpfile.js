'use strict';

var gulp = require('gulp');
var shell = require('shelljs');
var Q = require("Q");
var gutil = require('gulp-util');

gulp.task("dev", [
    "restore-packages",
    "restore-typings",
    "copy-lib",
	"copy-css"], function () {    
});

function streamToPromise(stream) {
    var def = Q.defer();
    
    stream.on('end', function() {
            def.resolve();
        })
        .on('error', def.reject);
    
    return def.promise;
}

function waitForChildProcess(child) {
    var defer = Q.defer();

    child.on('exit', function() {
        defer.resolve();
    });

    return defer.promise;
}

gulp.task("restore-packages", function() {
    if(!isInstalled("git")) {
        throw new Error("Git is not installed or not in the PATH");
    }

    shell.exec("node node_modules/bower/lib/bin/bower.js install");
});

gulp.task("restore-typings", function() {
    shell.exec("node node_modules/typings/dist/bin.js install");
});

gulp.task("copy-lib", function () {
    var lib = [
        "bower_components/angular/angular.js",
        "bower_components/system.js/dist/system.src.js",
        "bower_components/plugin-text/text.js",
        "bower_components/plugin-css/css.js",
        "bower_components/angular-ui-grid/ui-grid.js",
    ];

    return gulp.src(lib)
        .pipe(gulp.dest("lib"));
});

gulp.task("copy-css", function () {
    var lib = [
        "bower_components/angular-ui-grid/ui-grid.css",
        "bower_components/angular-ui-grid/ui-grid.woff",
        "bower_components/angular-ui-grid/ui-grid.ttf",
    ];

    return gulp.src(lib)
        .pipe(gulp.dest("styles"));
});

gulp.task("compile-ts", function(){
    shell.exec("node node_modules/typescript/lib/tsc.js");
});

function isInstalled(execName) {
    var res = shell.exec(execName, {silent: true});
    var ok = !res.stderr;
    return ok;
}
