var gulp       = require('gulp');
var stylus     = require('gulp-stylus');
var livereload = require('gulp-livereload');
var nib        = require('nib');
var rupture    = require('rupture');
var watchify = require('watchify');

var app = {
    'name': 'pokemon',
    'stylus' : {
        master: './public/stylus/pokemon.styl',
        src   : './public/stylus/**/*.styl',
        dest  : './public/css/'
    },
    'js' : {

    }
};


var stylus = require('gulp-stylus');



gulp.task('stylus', function(){
    console.log('Stylus compile = ' + app.name);
    gulp.src(app.stylus.master)
    .pipe(stylus({
        compress:true,
        url: 'embedurl',
        'include css': true,
        use: [
            nib(),
            rupture()
        ],
        import : [
            'nib',
        ],
        
        }))
    .pipe(gulp.dest(app.stylus.dest))
    .pipe(livereload({auto:true}))
    .on('end',function(){
        console.log('Minify CSS = '+app.name+".css");
        console.log(app.stylus.dest+app.name+".css");
    });
});

gulp.task('default',['watch']);

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch(app.stylus.src,['stylus']);
});