import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpCleanCss from 'gulp-clean-css';
import gulpRename from 'gulp-rename';

const sass = gulpSass(dartSass);

export function compileSass() {
  return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpRename({ basename: 'bulma-timeline' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(gulpCleanCss({ level: 2, sourceMap: true, rebaseTo: 'dist/css' }))
    .pipe(gulpRename({ basename: 'bulma-timeline', suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
}

export function watchSass() {
  gulp.watch('src/sass/index.scss', compileSass);
}

export default gulp.series(compileSass, watchSass);
