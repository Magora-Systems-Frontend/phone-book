var
    gIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('javascript', function () {

    return gulp.src(config['javascript']['src'])

        .pipe(concat(config['javascript']['dst']))
        .on('error', onErrors)


        .pipe(gIf(config.isProduction, uglify()))
        .on('error', onErrors)

        .pipe(gulp.dest(config['public']));
});