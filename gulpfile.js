// // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// // PATHS
// // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// const path = {
//     sass: './sass',
//     css: './css'
// }



// // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// // Code
// // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// const gulp          = require('gulp')
// const sass          = require('gulp-sass')
// const allSassFiles  = path.sass + '/**/*.scss'

// gulp.task('style', () => {
//     gulp.src(path.sass + '/app.scss')
//         .pipe(sass())
//         .pipe(gulp.dest(path.css))
// })

// gulp.task('watch', () => {
//     gulp.watch(allSassFiles, ['style'])
// })
var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        proxy: 'file:///D:/jatinder%20singh/portfolio/MyPortfolio'
      },
    })
  })

gulp.task('style', function(){
    gulp.src('./sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true
        }))
}) 

gulp.task('watch', ['browserSync', 'style'], function(){
    gulp.watch('./sass/**/*.scss', ['style'])
})

gulp.task('default', ['browserSync', 'style', 'watch']);