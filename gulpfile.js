var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	prefix = require('gulp-autoprefixer'),
	bower = require('gulp-bower'),
	jsHint = require('gulp-jshint'),
	gulpShopify = require('gulp-shopify-upload'),
	watch = require('gulp-watch'),
	prompt = require('gulp-prompt'),
	file = require('gulp-file'),
	path = {
		WATCH_JS: 'gulp/js/*.js',
		WATCH_SCSS: 'gulp/scss/*.scss',
		CSS_RESOURCES: 'gulp/scss/resources/*.css',
		CSS: 'gulp/scss/resources',
		ASSETS: 'assets',
		VENDOR: 'gulp/vendor/'
	};

gulp.task('default', ['sass', 'js']);


gulp.task( 'sass_compile', function() {
	return gulp.src(path.WATCH_SCSS)
		.pipe(sass()
			.on('error', notify.onError({
				message: 'Sass failed. Check console for errors'
			}))
			.on('error', sass.logError))
		.pipe(prefix({
			browsers: ['last 2 versions', '> 1%', 'ie >= 9'],
			cascade: false
		}))
		.pipe(gulp.dest(path.CSS))
		.pipe(notify('Sass successfully compiled'));
});

gulp.task('sass', ['sass_compile'], function(){
	return gulp.src(path.CSS_RESOURCES)
		.pipe(concat('vtg-custom.css.liquid'))
		.pipe(gulp.dest(path.ASSETS))
});


gulp.task('js', function(){
	gulp.src(path.WATCH_JS)
		.pipe(concat('vtg-custom.js.liquid'))
		.pipe(gulp.dest(path.ASSETS))
});

gulp.task('watch', function() {
	gulp.watch(path.WATCH_JS, ['js']);
	gulp.watch(path.WATCH_SCSS, ['sass']);
});
