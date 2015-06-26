var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var $ = require('jquery');

var PokemonActions = require('../actions/PokemonActions.jsx');

var Navigation =Router.Navigation;


var PokemonSearch = React.createClass({
    mixins : [Navigation],
    getInitialState : function(){

      return {
        pokemonId : "",

      };
    },

    render : function(){
        var search = "Buscar a " + this.state.pokemonId;
        var search_ = "/pokemon/" + this.state.pokemonId;
        return(
          <form onSubmit={this.searchPokemon} className="PokemonSearch">
            <input 
              type="text" 
              placeholder="Nombre o numero de pokemon"
              value={this.state.pokemonId}
              onChange={this.onChange}
              className="PokemonSearch-input"
              />
              <button 
              type="submit"
              className="PokemonSearch-submit"
              >Buscar</button>
          </form>
        );
    },
    onChange : function(e){
      this.setState({
        pokemonId : event.target.value,
      });
    },
    searchPokemon: function(e) {
      e.preventDefault();
      $.ajax({
          headers: { 
              Accept : "application/json; charset=utf-8"
          },
          url :'/pokemon/'+this.state.pokemonId,
          method : "GET",
          contentType : "application/json"
          })
      .done(function(pokemon){

          PokemonActions.changePokemon(pokemon);
          this.transitionTo('pokemon', {id: this.state.pokemonId});

      }.bind(this));
    },

});

module.exports = PokemonSearch;


