var gulp       = require('gulp');
var stylus     = require('gulp-stylus');
var livereload = require('gulp-livereload');
var nib        = require('nib');
var rupture    = require('rupture');
var watchify = require('watchify');
var babelify = require('babelify');
var globify = require('require-globify');
var reactify = require('reactify');
var browserify = require('browserify');
var source         = require('vinyl-source-stream');
var streamify      = require('gulp-streamify');
var uglify      = require('gulp-uglify');

var app = {
    'name': 'pokemon',
    'stylus' : {
        master: './public/stylus/pokemon.styl',
        src   : './public/stylus/**/*.styl',
        dest  : './public/css/'
    },
    'js' : {
        name : 'index.js',
        master : './public/index.js',
        dest : './public/js/'
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

gulp.task('watchify', function(){
    var watcher  = watchify(browserify({
        entries     : [app.js.master],
        transform   : [babelify, globify],
        debug       : true,
        cache       : {}, 
        packageCache: {}, 
        fullPaths   : true
    }));

    function bundler(){
        watcher
            .bundle()
            .pipe(source(app.js.name))
            .pipe(streamify(uglify({
                mangle: false,
                compress : {
                    global_defs : {
                        DEBUG : true,
                    },
                    drop_debugger : false,
                }
            })))
            .pipe(gulp.dest(app.js.dest))
            .pipe(livereload({auto:true}));
            console.log(app.js.name, 'compilado');

    }
    bundler();
    return watcher.on('update', bundler);
})

gulp.task('default',['watch', 'watchify']);

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch(app.stylus.src,['stylus']);
});