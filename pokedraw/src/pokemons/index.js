import Pokemon from "./Pokemon";

const clickOnPoke = (poke, capturado) => {
    if(capturado){
        console.log(`${poke} foi solto!`);
    } else {
        console.log(`${poke} foi capturado!`);
    }
}

const Pokemons = () => {
    return(
        <div>
            <h3>Lista de Pokemons</h3>
            <hr/>
            <Pokemon name="Swampert"
                     description="Swampert is very strong. It has enough power to easily drag a boulder weighing more than a ton. This Pokémon also has powerful vision that lets it see even in murky water."
                     link="https://www.pokemon.com/br/pokedex/swampert"
                     clickOnPoke={clickOnPoke}
                     img_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png"
                     capturado={false}/>
            <Pokemon name="Breloom"
                     description="Breloom closes in on its foe with light and sprightly footwork, then throws punches with its stretchy arms. This Pokémon’s fighting technique puts boxers to shame."
                     clickOnPoke={clickOnPoke}
                     img_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png"
                     capturado={false}/>
            <Pokemon name="Oshawott"
                     link="https://www.pokemon.com/br/pokedex/oshawott"
                     clickOnPoke={clickOnPoke}
                     img_url="https://legends.pokemon.com/assets/pokemon/pokemon_oshawott.png"
                     capturado={false}/>
        </div>
    )
}

export default Pokemons;