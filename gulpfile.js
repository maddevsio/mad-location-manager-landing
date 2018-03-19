var gulp           = require('gulp'),
	browserSync    = require('browser-sync'),
	requireDir     = require('require-dir');

requireDir('gulp/tasks', { recurse: true });

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['sass', 'header', 'pug', 'script', 'libs', 'browser-sync'], function() {
	gulp.watch('app/sass/styles/*.sass', ['styles']);
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/sass/header.sass', ['header']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/pug/*.pug', ['pug']);
	gulp.watch('app/js/script.js', ['script']);
});

gulp.task('default', ['watch']);
