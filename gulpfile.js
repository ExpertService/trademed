var gulp = require('gulp');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();


gulp.task('styles', function() {
    gulp.src('./src/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css/'))
    ;
});

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('default', function() {
    gulp.run('lr-server', 'styles');

    gulp.watch('src/less/**', function(event) {
        gulp.run('styles');
    });

})