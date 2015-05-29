var gulp = require('gulp')
    , browserify = require('browserify')
    , concat = require('gulp-concat')
    , reactify = require('reactify')
    , source = require("vinyl-source-stream")
    , less = require('gulp-less')
    , path = require('path')
    ;

gulp.task('browserify', function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./src/js/main.js');
    var r = b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/js'));
    return r;
});
gulp.task('browserify-noflux', function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./src/js/main-noflux.js');
    var r = b.bundle()
        .pipe(source('main-noflux.js'))
        .pipe(gulp.dest('./dist/js'));
    return r;
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/index-noflux.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify','browserify-noflux','copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});

gulp.task('less', function() {
    return gulp.src('./src/less/main.less')
            .pipe(less({
                path: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(gulp.dest('./dist/css'));

});

