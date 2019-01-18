var express = require('express');
require('isomorphic-fetch')
var app = express();
app.set('port', (process.env.PORT || 8080));

var pokeAPI = require('pokenode');


require('node-jsx').install();
var path = require('path');

var renderer = require('react-engine');
// create the view engine with `react-engine`
var engine = renderer.server.create({
    reactRoutes: path.join(__dirname + '/public/routes.jsx')
});

// set the engine
app.engine('.jsx', engine);
// app.engine('.js', engine);

// set the view directory
app.set('views', __dirname + '/public/views');

// set js as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', renderer.expressView);

//expose public folder as static assets
app.use(express.static(__dirname + '/public'));



function index(req, res) {
    // console.log()
    res.render(req.url, {
        title: 'Server Render index',
        name: 'Hola mundo'
    });


}
const BASE_API = 'https://pokeapi.co/api/v2/'

async function pokemon(req, res){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.id}/`)
    const pokemon = await response.json()
    if(req.xhr){
        res.json(data)
    }else{
        res.render(req.url, {
            title: "Pokemon encontrado :) ",
            pokemon,
        });
    }
    // pokeAPI.pokemon(req.params.id, function(err, data) {
    //     if(err) {
    //         if(req.xhr){
    //           res.status(404).send('Pokemon not found :(');
    //         } else {
    //           res.render(req.url, {
    //               title : "Pokemon no encontrado :(",
    //               pokemon: {}
    //           });
    //         }

    //     } else {
    //         if(req.xhr){
    //             res.json(data)
    //         }else{
    //             res.render(req.url, {
    //                 title : "Pokemon encontrado :)",
    //                 pokemon : data,
    //             });
    //         }
    //     }
    // });
}

app.get('/', index);
app.get('/404', function(req, res){
  res.render(req.url, {
      title: 'Pokemon no encontrado',
  });
});


app.get('/pokemon/:id', pokemon);


app.listen(app.get('port'), function(){
    console.log('node está corriendo en el puerto '+app.get('port'));
});
