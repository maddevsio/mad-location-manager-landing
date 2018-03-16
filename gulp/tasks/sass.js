var gulp           = require('gulp'),
		sass           = require('gulp-sass'),
    cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
    browserSync    = require('browser-sync'),
		notify         = require('gulp-notify'),
		cssbeautify    = require('gulp-cssbeautify'),
		uncss          = require('gulp-uncss'),
		bless          = require('gulp-bless'),
    autoprefixer   = require('gulp-autoprefixer');

gulp.task('sass', ["styles"], function() {
	return gulp.src('app/sass/*.sass')
		.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS()) // Comment out when debugging
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
});


gulp.task('styles', function() {
	return gulp.src('app/sass/styles/*.sass')
		.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(bless())
		.pipe(cssbeautify())
		.pipe(gulp.dest('app/css/styles'))
		.pipe(browserSync.reload({stream: true}))
});