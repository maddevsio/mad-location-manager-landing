var gulp           = require('gulp'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglify'),
    rename         = require('gulp-rename'),
    babel          = require('gulp-babel');

gulp.task('script', function() {
	return gulp.src([
		'app/js/script.js',
		])
    .pipe(babel({
        presets: ['es2015', 'env'],
        compact: true
    }))
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('libs', function() {
	return gulp.src([
        "app/libs/jquery/dist/jquery.min.js",
        "app/libs/slick-carousel/slick/slick.min.js",
        "app/libs/page-scroll-to-id/jquery.malihu.PageScroll2id.js"
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});
