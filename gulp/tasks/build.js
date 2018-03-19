var gulp           = require('gulp'),
    del            = require('del'),
    imagemin       = require('gulp-imagemin'),
    cache          = require('gulp-cache'),
	pngquant       = require('imagemin-pngquant'),
    gulpRemoveHtml = require('gulp-remove-html');


gulp.task('build', ['removedist', 'buildhtml', 'imagemin', 'sass', 'libs'], function() {

	var buildCssLibs = gulp.src([
		'app/css/libs.min.css'
	]).pipe(gulp.dest('dist/css'));

	var buildCssBase = gulp.src([
		'app/css/base.min.css'
	]).pipe(gulp.dest('dist/css'));

	var buildCssStyles = gulp.src([
		'app/css/styles/*.css'
	]).pipe(gulp.dest('dist/css/styles'));

	var buildFiles = gulp.src([
		'app/.htaccess'
	]).pipe(gulp.dest('dist'));

	var buildFonts = gulp.src([
		'app/fonts/**/*'
	]).pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src([
		'app/js/*.js'
	]).pipe(gulp.dest('dist/js'));

	var buildJson = gulp.src([
		'app/js/lang.json'
	]).pipe(gulp.dest('dist/js'));

	var buildWebfonts = gulp.src([
		'app/webfonts/**/*'
	]).pipe(gulp.dest('dist/webfonts'));

});

gulp.task('buildhtml', function() {
  gulp.src(['app/*.html'])
    .pipe(gulpRemoveHtml())
    .pipe(gulp.dest('dist/'));
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('removedist', function() { return del.sync('dist'); });
