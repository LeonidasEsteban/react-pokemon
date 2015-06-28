var React = require('react');

var Pokemon = React.createClass({

    getInitialState : function(props){
        props = props || this.props;
        return props
    },
    componentWillReceiveProps: function(newProps, oldProps){
        this.setState(this.getInitialState(newProps));
    },
    render : function(){
        console.info('Pokemon render: ', this.state.name);
        var classes = "Pokemon is-";
        classes+=this.state.types[0].name
        var sprite = "http://play.pokemonshowdown.com/sprites/xyani/"+this.state.name.toLocaleLowerCase()+".gif";
        var sound = "http://veekun.com/dex/media/pokemon/cries/"+this.state.national_id+".ogg";
        return (
            <div className={classes}>
                <audio src={sound} autoPlay></audio>
                <h1 className="Pokemon-name">
                    {this.state.name} 
                </h1>
                <img src={sprite} alt={this.state.name}  onClick={this._click}/> 
                {this.state.types.map(function(type){
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