var React = require('react');
var PokemonSearch = require('../components/PokemonSearch.jsx');

module.exports = React.createClass({
  displayName: 'index',
  render: function render() {
    return (
        <div className="Index">
          <h1 className="Index-title">Busca un Pokemon </h1>
          <h3 className="Index-subtitle">puedes usar numeros del 1 al 718 o su nombre</h3>
          <PokemonSearch />
        </div>
    );
  },
});