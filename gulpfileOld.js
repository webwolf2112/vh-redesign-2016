//Include gulp

var gulp = require ('gulp');

//Include Our Plugins

var jshint = require('gulp-jshint'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	prefix = requite('gulp-autoprefixer');

//Lint Task
gulp.task('lint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
} );

//Compile Our Sass
gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'));
} );

//Concatenate & Minify JS
gulp.task('scripts', function(){
	return gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));

} );

//Watch Files for Chages
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch('scss/*/scss', ['sass']);
} );

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch' ] );