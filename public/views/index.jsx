'use strict';

var React = require('react');
var Router = require('react-router');
var Layout = require('./layout.jsx');
var PokemonSearch = require('../components/PokemonSearch.jsx')


module.exports = React.createClass({

  displayName: 'index',

  render: function render() {
    return (
        <div id="index">
          <h1>Busca un pokemon, puedes usar numeros del 1 al 718 o su nombre ^ ^</h1>
          <PokemonSearch />
        </div>
    );
  },
  
});