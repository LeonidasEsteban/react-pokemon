var React = require('react');
var $ = require('jquery');


var Layout = require('./layout.jsx');
var PokemonSearch = require('./PokemonSearch.jsx');

var Pokemon = React.createClass({
    getInitialState : function(){
        return {
        }
    },
    componentDidMount : function(){
        
    },
    render : function(){
        var sprite = "http://pokeapi.co/media/img/"+this.props.pokemon.national_id+".png"
        return (
            <Layout {...this.props}>
                <h2>Pokemon encontrado!</h2>
                <table>
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
                        <td><img src={sprite} alt=""/> </td>
                    </tr>
                </table>
                <hr/>
                <h2>Busca otro pokemon</h2>
                <PokemonSearch/>
            </Layout>
           
        )
    },
    _click : function(){
        console.log('auch!')
        
    }
})


module.exports = Pokemon;