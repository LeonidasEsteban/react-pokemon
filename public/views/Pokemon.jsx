var React = require('react');

var Layout = require('./layout.jsx');
var PokemonSearch = require('../components/PokemonSearch.jsx');
var Pokemon = require('../components/Pokemon.jsx');

var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  displayName: 'pokemon',
  render: function render() {
    return (
      <div >
          <h2>Pokemon encontrado!</h2> <Link to="/">ir a la home</Link>
          <Pokemon {...this.props} />
          <hr/>
          <h2>Busca otro pokemon</h2>
          <PokemonSearch/>
      </div>
    );
  },
  
});