var React = require('react');

var PokemonSearch = require('../components/PokemonSearch.jsx');
var Pokemon = require('../components/Pokemon.jsx');

var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;

var Reflux = require('reflux');
var PokemonStore = require('../stores/PokemonStores.jsx')

var $ = require('jquery')
module.exports = React.createClass({
  displayName: 'pokemon',
  mixins : [
    Navigation,
  ],
  getDefaultProps : function(){
    return {
      server : false,
    }
  },
  getInitialState : function(props){
    if(Object.keys(PokemonStore.getPokemon()).length === 0){
      props = this.props.pokemon 
    }else{
      props = PokemonStore.getPokemon()
    }
    return {
      pokemon : props
    }
  },
  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
  },
  render: function() {
    console.info('Pokedex render: ',this.state.pokemon.name)
    return (
      <div className="Pokedex">
          <a 
            className="Pokedex-goBack"
            onClick={this.goHome}>
          Go to Home</a>
          <Pokemon {...this.state.pokemon}/>
          <div className="Pokedex-search">
            <h2 className="Pokedex-searchTitle">Find more pokemons!</h2>
            <PokemonSearch />
          </div>
      </div>
    );
  },
  goHome : function(){
    this.transitionTo('/')
  }
  
});

