var Reflux = require('reflux');
var PokemonActions = require('../actions/PokemonActions.jsx')

var pokemon = {}

var PokemonStores = Reflux.createStore({
    init: function() {
        this.listenToMany(PokemonActions);
    },
    onChangePokemon: function(pkm) {
        pokemon = pkm;
        console.log('Nuevo pokemon almacenado: ',pkm.name)
        this.trigger(pkm);
    },
    getPokemon : function(){
        return pokemon;
    }

});

module.exports = PokemonStores;