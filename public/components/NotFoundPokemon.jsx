var React = require('react');

// var Layout = require('./layout.jsx');
var PokemonSearch = require('../components/PokemonSearch.jsx')


module.exports = React.createClass({



  render: function render() {

    return (
        <div className="NotFound">
          <h1>hubo un error, porfa busca un pokemon válido</h1>
          <PokemonSearch/>
        </div>
    );
  },

});