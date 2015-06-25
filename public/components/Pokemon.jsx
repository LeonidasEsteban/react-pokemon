var React = require('react');

var Pokemon = React.createClass({

    getDefaultProps : function(){
        return {
            pokemon : {}
        }
    },

    render : function(){

        var sprite = "//pokeapi.co/media/img/"+this.props.pokemon.national_id+".png"
        return (
            <table >
                <tr>
                    <td>
                        Nombre
                    </td>
                    <td>
                        {this.props.pokemon.name}
                    </td>
                </tr>
                <tr>
                    <td>Imagen</td>
                    <td><img src={sprite} alt="" onClick={this._click}/> </td>
                </tr>
            </table>
        )
    },
    _click : function(){
        console.log('auch!')
        
    }
})


module.exports = Pokemon;