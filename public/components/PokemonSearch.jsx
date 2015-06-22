var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PokemonSearch = React.createClass({
    getInitialState : function(){

      return {
        pokemonId : "",

      }
    },
    componentDidMount : function(){
      // Router.run('/pokemon/pikachu', Router.HashLocation ,document.body)
    },
    render : function(){
        var search = "Buscar a " + this.state.pokemonId;
        var search_ = "/pokemon/" + this.state.pokemonId;
        return(
          <div>
            <input 
              type="text" 
              placeholder="Nombre o numero de pokemon"
              value={this.state.pokemonId}
              onChange={this.onChange}
              />
              <Link to={search_} >{search}</Link>
          </div>
        )
    },
    onChange : function(event){
      this.setState({
        pokemonId : event.target.value,
      })
    },
    onSubmit: function(event) {
      event.preventDefault();
      // Router.run()
      // document.location.href = '/pokemon/'+this.state.pokemonId;
    },

})

module.exports = PokemonSearch;


