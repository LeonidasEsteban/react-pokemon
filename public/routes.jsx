var React = require('react');
var Router = require('react-router');

var App = require('./views/app.jsx');
var Index = require('./views/index.jsx')
var search = require('./views/search.jsx')
var NotFoundPokemon = require('./components/NotFoundPokemon.jsx')


var routes = (
  <Router.Route path='/' handler={App}>
      <Router.DefaultRoute name='index' handler={Index} />
      <Router.Route name="search" path="/pokemon/:id" handler={search}/>
      <Router.Route name="404" handler={NotFoundPokemon} />
  </Router.Route>
);



module.exports = routes;
