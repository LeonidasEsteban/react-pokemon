var Reflux = require('reflux');
var PokemonActions = require('../actions/PokemonActions.jsx')


var PokemonStores = Reflux.createStore({
    init: function() {
        PokemonActions.changePokemon.listen(this.output);
    },

    output: function(pokemon) {
        console.log('nuevo pokemon encontrado: ',pokemon)
        this.trigger(pokemon);
    }

});

module.exports = PokemonStores;