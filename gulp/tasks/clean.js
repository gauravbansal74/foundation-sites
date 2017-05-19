var gulp = require('gulp');
var rimraf = require('rimraf').sync;

var DEST = "./../../src/styles/foundation/assets";
// Erases the dist folder
gulp.task('clean', function() {
  rimraf(DEST);
});
