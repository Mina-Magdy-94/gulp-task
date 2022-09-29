const gulp = require("gulp");
const { src, dest, watch, parallel, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
var cleanCss = require("gulp-clean-css");
// var processhtml = require("gulp-processhtml");

var globs = {
  html: "*.html",
  css: "./assets/css/*.css",
  js: "./assets/js/*.js",
};

// //minify images and copy it to dist folder
// const imagemin = require("gulp-imagemin");
// //don't forget to install gulp-imagemin with version 7.1.0
// function imgMinify() {
//   return gulp.src(globs.img).pipe(imagemin()).pipe(gulp.dest("dist/images"));
// }
// exports.img = imgMinify;

//run image task by 'gulp' commond
//  exports.default = imgMinify
//  or
//run image task by 'gulp imgMinify' commond

//creating dist folder and copy html files to it

function minifyHTML() {
  return src(globs.html)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("dist"));
}
exports.html = minifyHTML;

//JS Task
function jsMinify() {
  //search for sourcemaps
  return (
    src(globs.js) //path includeing all js files in all folders
      //concate all js files in all.min.js
      .pipe(concat("app.js"))
      //use terser to minify js files
      .pipe(terser())
      //create source map file in the same directory
      .pipe(dest("dist/assets/js"))
  );
}
exports.js = jsMinify;

//minify css files and copy it to dist folder

function cssMinify() {
  return (
    src(globs.css)
      //concate all css files in style.min.css
      .pipe(concat("style.css"))
      //minify file
      .pipe(cleanCss())
      .pipe(dest("dist/assets/css"))
  );
}
exports.css = cssMinify;

//

var browserSync = require("browser-sync");
function serve(cb) {
  browserSync({
    server: {
      baseDir: "dist/",
    },
  });
  cb();
}

// function toProcessHtml() {
//   return gulp.src("./*.html").pipe(processhtml()).pipe(gulp.dest("dist"));
// }
// exports.htmlProcessing = toProcessHtml;

function reloadTask(done) {
  browserSync.reload();
  done();
}

//watch task
function watchTask() {
  watch(globs.html, series(minifyHTML, reloadTask));
  watch(globs.js, series(jsMinify, reloadTask));
  watch(globs.css, series(cssMinify, reloadTask));
  // watch(globs.img, series(imgMinify, reloadTask));
}
exports.default = series(
  // toProcessHtml,
  parallel(jsMinify, cssMinify, minifyHTML),
  serve,
  watchTask
);
