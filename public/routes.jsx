var React = require('react');
var Router = require('react-router');

var App = require('./views/app.jsx');
var Index = require('./views/index.jsx')
var pokemon = require('./views/pokemon.jsx')


var routes = (
  <Router.Route path='/' handler={App}>
      <Router.DefaultRoute name='index' handler={Index} />
      <Router.Route name="pokemon" path="/pokemon/:id" handler={pokemon}/>
  </Router.Route>
);



module.exports = routes;
