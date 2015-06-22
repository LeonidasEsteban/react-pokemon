var React = require('react');
var $ = require('jquery');

var Pokemon = React.createClass({
    getInitialState : function(){
        return {
            pokemon : {}
        }
    },
    componentWillMount : function(){
        this.setState({pokemon:this.props.pokemon});
    },
    componentDidMount :function(){
        $.ajax({
            headers: { 
                Accept : "application/json; charset=utf-8"
            },
            url :'/pokemon/'+this.props.params.id,
            method : "GET",
            contentType : "application/json"
            })
        .done(function(pokemon){
            this.setState({pokemon:pokemon})
        }.bind(this))
    },
    render : function(){

        var sprite = "http://pokeapi.co/media/img/"+this.state.pokemon.national_id+".png"
        return (
            <table >
                <tr>
                    <td>
                        Nombre
                    </td>
                    <td>
                        {this.state.pokemon.name}
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