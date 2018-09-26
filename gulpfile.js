var gulp = require('gulp'), sass = require('gulp-sass');
gulp.task('sass' , function() {
	return gulp.src('app/sass/main.sass') // Выборка исходных файлов для обработки плагином
  	.pipe(sass()) // Вызов Gulp плагина для обработки файла
  	.pipe(gulp.dest('app/css')) // Вывод результирующего файла в папку назначения (dest - пункт назначения)
});
gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
});