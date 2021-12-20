import React from "react";
import Pokemon from "./Pokemon";
import "./style.css";

/*
const clickOnPoke = (poke, capturado) => {
    if(capturado){
        console.log(`${poke} foi solto!`);
    } else {
        console.log(`${poke} foi capturado!`);
    }
}
*/

async function getPokemons() {
    let response = await fetch('http://localhost:3000/api/pokemons.json');
    let data = await response.json();
    return data;
}

class Pokemons extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pokemons: [ ]
        }
    }

    componentDidMount() {
        getPokemons().then(data => {
            this.setState(state => ({
                pokemons: data["pokemons"]
            }));
        });
    }

    removeLast = () => {
        let new_pokemons = [...this.state.pokemons] /* Extraindo todos as propriedades de pokemons */
        new_pokemons.pop();
        this.setState(state => ({
            pokemons: new_pokemons
        }))
    }

    addNew = () => {
        let new_pokemon = this.state.pokemons[this.state.pokemons.length -1];

        this.setState(state => ({
            pokemons: [...this.state.pokemons, new_pokemon]
        }))
    }

    render() {
        return(
            <div>
                <h3>Lista de Pokemons</h3>
                <button className="add" onClick={this.addNew}>Adicionar um Pokemon</button>
                <button className="remove" onClick={this.removeLast}>Remover o último da lista</button>
                <hr/>
                {this.state.pokemons.map((pokemon) =>
                    <Pokemon name={pokemon.name}
                    description={pokemon.description}
                    link={pokemon.link}
                    img_url={pokemon.img_url}
                    types={pokemon.types}/>
                )}
            </div>
        )
    }
}

export default Pokemons;