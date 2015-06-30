"use strict"
var $ = require('jquery');
var React = require('react');
var ColorThief = require('../js/color-thief');

var Pokemon = React.createClass({

    getInitialState : function(props){
        props = props || this.props;
        return props
    },
    componentDidMount : function(){
        setTimeout(function(){
            this.setPalette();
        }.bind(this),1000)
    },
    componentWillReceiveProps: function(newProps, oldProps){
        this.setState(this.getInitialState(newProps),function(){
            setTimeout(function(){
                this.setPalette();
            }.bind(this),1000)
        }.bind(this));
    },
    render : function(){
        console.info('Pokemon render: ', this.state.name);

        var showdownSprite = "http://play.pokemonshowdown.com/sprites/xyani/"+this.state.name.toLocaleLowerCase()+".gif";
        var pokeapiSprite = "http://pokeapi.co/media/img/"+this.state.national_id+".png";
        var sound = "http://veekun.com/dex/media/pokemon/cries/"+this.state.national_id+".ogg";
        var colors = {}
        if(this.state.palette){
            colors = this.state.palette.map(function(colors){
                
                var style = {
                    background : 'rgb('+colors+')',
                }
                return <span style={style} className="color"></span>
            })
        }
        var poke = [] 
        for(var i = 0; i < 10; i++){
            poke.push(<img src={showdownSprite} alt={this.state.name}/>)
        }
        return (
            <div className="Pokemon">
                <div>
                    {colors}
                </div>
                <div className="Pokemon-content">
                    <audio src={sound} autoPlay ></audio>
                    <h1 className="Pokemon-name">
                        {this.state.name}
                        <span>
                            {poke}
                        </span>
                    </h1>
                    <img src={pokeapiSprite} className="u-hidden" id="pokemon-img" crossOrigin="anonymous" /> 
                    {this.state.types.map(function(type){
                        var classes = "type left "+type.name;
                        return <span className={classes} key={type.name}>{type.name}</span>
                    })}
                </div>
            </div>
        )
    },
    setPalette(){
        var colorThief = new ColorThief();
        var palette = colorThief.getPalette(document.getElementById('pokemon-img'));

        $('body').attr({'style':
        `
        background:
            linear-gradient(
                rgb(${palette[0]}),
                transparent
            ),
            linear-gradient(
                90deg,
                rgb(${palette[1]}),
                transparent
            ),
            linear-gradient(
                -90deg,
                rgb(${palette[2]}),
                transparent
            );
            
        `
        })

        this.setState({
            palette : palette,
        })
    }
})


module.exports = Pokemon;