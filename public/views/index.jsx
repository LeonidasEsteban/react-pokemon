'use strict';

var React = require('react');
var PokemonSearch = require('../components/PokemonSearch.jsx')
module.exports = React.createClass({

  displayName: 'index',
  render: function render() {
    return (
        <div id="index">
          {this.props.title}
          <h1>Busca un pokemon, puedes usar numeros del 1 al 718 o su nombre ^ ^</h1>
          <PokemonSearch />
        </div>
    );
  },
  search : function(){

  }
  
});