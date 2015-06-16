var express = require('express');

var app = express();

var pokeAPI = require('pokenode');


require('node-jsx').install();

var renderer = require('react-engine');
// create the view engine with `react-engine`
var engine = renderer.server.create();

// set the engine
app.engine('.jsx', engine);
app.engine('.js', engine);

// set the view directory
app.set('views', __dirname + '/public/views');

// set js as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', renderer.expressView);

//expose public folder as static assets
app.use(express.static(__dirname + '/public'));



function index(req, res) {

    res.render('index', {
        title: 'Server Render index',
        name: 'Hola mundo'
    });


}
function pokemon(req, res){
    pokeAPI.pokemon(req.params.id, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            res.render('Pokemon', {
                title : "Pokemon encontrado",
                pokemon : data
            });
        }
    });
}

app.get('/', index);
app.get('/pokemon/:id', pokemon);


app.listen(8001, false, false, function(){
    console.log('node está corriendo en el puerto 8001')
});