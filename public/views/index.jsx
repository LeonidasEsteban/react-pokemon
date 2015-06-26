var React = require('react');
var PokemonSearch = require('../components/PokemonSearch.jsx');

module.exports = React.createClass({
  displayName: 'index',
  render: function render() {
    return (
        <div className="Index">
          <h1 className="Index-title">Find a Pokemon!</h1>
          <h3 className="Index-subtitle">Search by name or ID (1 - 718)</h3>
          <PokemonSearch />
        </div>
    );
  },
});