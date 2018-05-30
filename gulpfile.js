let gulp = require("gulp"),
//browserSync = require("browser-sync"),
uglify = require("gulp-uglify"),
concat = require("gulp-concat"),
rename = require("gulp-rename"),
minify = require("gulp-clean-css");

gulp.task("default", ["scripts","styles"]);

// gulp.task("browser", () => {
//     browserSync.init({
//         server:{
//             baseDir: "./"
//         }
//     });
// });

gulp.task("scripts",()=>{
    return gulp.src("public/javascripts/**/*.js")
    .pipe(concat("script.js"))
    .pipe(gulp.dest("public/dist/script"))
    .pipe(rename("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("public/dist/script"));
})

gulp.watch("public/javascripts/**/*.js").on("change",()=>{
    return gulp.src("public/javascripts/**/*.js")
    .pipe(concat("script.js"))
    .pipe(gulp.dest("public/dist/script"))
    .pipe(rename("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("public/dist/script"));
})

gulp.task("styles",()=>{
    return gulp.src("public/stylesheets/**/*.css")
    .pipe(concat("style.css"))
    .pipe(gulp.dest("public/dist/css"))
    .pipe(rename("style.min.css"))
    .pipe(minify())
    .pipe(gulp.dest("public/dist/css"));
})

gulp.watch("public/stylesheets/**/*.css").on("change",()=>{
    return gulp.src("public/stylesheets/**/*.css")
    .pipe(concat("style.css"))
    .pipe(gulp.dest("public/dist/css"))
    .pipe(rename("style.min.css"))
    .pipe(minify())
    .pipe(gulp.dest("public/dist/css"));
})

// gulp.watch(["index.html","./public/stylesheets/style.css"]).on("change",()=>{
//     browserSync.reload();
// });