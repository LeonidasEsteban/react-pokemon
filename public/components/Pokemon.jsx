var React = require('react');

var Pokemon = React.createClass({

    getDefaultProps : function(){
        return {
            pokemon : {}
        }
    },

    render : function(){
        var classes = "Pokemon is-";
        classes+=this.props.pokemon.types[0].name
        var sprite = "http://play.pokemonshowdown.com/sprites/xyani/"+this.props.pokemon.name.toLocaleLowerCase()+".gif";
        var sound = "http://veekun.com/dex/media/pokemon/cries/"+this.props.pokemon.national_id+".ogg";
        return (
            <div className={classes}>
                <audio src={sound} autoPlay></audio>
                <h1 className="Pokemon-name">
                    {this.props.pokemon.name}
                </h1>
                <img src={sprite} alt={this.props.pokemon.name}  onClick={this._click}/> 
                {this.props.pokemon.types.map(function(type){
                    var classes = "type left "+type.name;
                    return <span className={classes} key={type.name}>{type.name}</span>
                })}

        
            </div>
        )
    },
    _click : function(){
        console.log('auch!')
        
    }
})


module.exports = Pokemon;