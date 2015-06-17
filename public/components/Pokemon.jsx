var React = require('react');
var $ = require('jquery');

var Pokemon = React.createClass({
    render : function(){
        this._click();
        var sprite = "http://pokeapi.co/media/img/"+this.props.pokemon.national_id+".png"
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