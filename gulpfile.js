var gulp = require('gulp')
    , browserify = require('browserify')
    , concat = require('gulp-concat')
    , reactify = require('reactify')
    , source = require("vinyl-source-stream");

gulp.task('browserify', function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./src/js/main.js');
    var r = b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/js'));
    return r;
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify','copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});

