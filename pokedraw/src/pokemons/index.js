import React, {useState, useEffect} from "react";
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

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons().then(data => {
            setPokemons(data['pokemons']); /* Pegar do JSON */
        })
    }, []) /* Roda apenas na inicialização, e não em cada update */

    const removeLast = () => {
        let new_pokemons = [...pokemons] /* Extraindo todos as propriedades de pokemons */
        new_pokemons.pop();
        setPokemons(new_pokemons);
    }

    const addNew = () => {
        let new_pokemon = pokemons[pokemons.length -1];
        setPokemons([...pokemons, new_pokemon]);
    }

    return(
        <div>
            <h3>Lista de Pokemons</h3>
            <button className="add" onClick={addNew}>Adicionar um Pokemon</button>
            <button className="remove" onClick={removeLast}>Remover o último da lista</button>
            <hr/>
            {pokemons.map((pokemon) =>
                <Pokemon name={pokemon.name}
                description={pokemon.description}
                link={pokemon.link}
                img_url={pokemon.img_url}
                types={pokemon.types}/>
            )}
        </div>
    )
}

export default Pokemons;