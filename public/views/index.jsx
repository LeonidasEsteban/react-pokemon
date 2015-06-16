'use strict';

var React = require('react');
var $ = require('jquery');

var Layout = require('./layout.jsx');
var PokemonSearch = require('./PokemonSearch.jsx')


module.exports = React.createClass({

  
  
  render: function render() {
    
    return (
      <Layout {...this.props}>
        <div id='index'>
          <h1>Busca un pokemon, puedes usar numeros del 1 al 718 o su nombre ^ ^</h1>
          <PokemonSearch/>
        </div>
      </Layout>
    );
  },
  
});