var React = require('react');

var Layout = require('./layout.jsx');
var PokemonSearch = require('../components/PokemonSearch.jsx');
var Pokemon = require('../components/Pokemon.jsx');

module.exports = React.createClass({

  
  
  render: function render() {
    
    return (
      <Layout {...this.props}>
          <h2>Pokemon encontrado!</h2>
          <Pokemon pokemon={this.props.pokemon}/>
          <hr/>
          <h2>Busca otro pokemon</h2>
          <PokemonSearch/>
      </Layout>
    );
  },
  
});