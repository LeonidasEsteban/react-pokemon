var React = require('react');

var PokemonSearch = React.createClass({
    getInitialState : function(){

      return {
        pokemonId : "",
      }
    },
    render : function(){
        return(
            <form action="" onSubmit={this.onSubmit}>
            <input 
              type="text" 
              placeholder="Nombre o numero de pokemon"
              value={this.state.pokemonId}
              onChange={this.onChange}
              />
            <button type="submit">Buscar</button>
          </form>
        )
    },
    onChange : function(event){
      this.setState({
        pokemonId : event.target.value,
      })
    },
    onSubmit: function(event) {
      event.preventDefault();
      document.location.href = '/pokemon/'+this.state.pokemonId;
    },

})

module.exports = PokemonSearch;