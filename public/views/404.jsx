var React = require('react');

var Layout = require('./layout.jsx');
var PokemonSearch = require('../components/PokemonSearch.jsx')


module.exports = React.createClass({

  
  
  render: function render() {
    
    return (
      <Layout {...this.props}>
        <div >
          <h1>hubo un error, porfa busca un pokemon valido</h1>
          <PokemonSearch/>
        </div>
      </Layout>
    );
  },
  
});