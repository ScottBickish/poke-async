import { ProxyState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"

function _drawPokeApiPokemon(){
    const pokemon = ProxyState.pokeApiPokemon
    console.log('tester')
    let template = ''
    pokemon.forEach(p => template += `<p class="m-1 selectable" onclick="app.pokemonController.getApiPokemonInfo('${p.name}')">${p.name}</p>`)
    document.getElementById('poke-api').innerHTML = template
}


export class PokemonsController{
    constructor(){
        this.getPokeApiPokemons()
        ProxyState.on('pokeApiPokemon', _drawPokeApiPokemon)

    }

    async getPokeApiPokemonInfo(){
        try {
            await pokemonsService.getPokeApiPokemonInfo()
        } catch (error) {
            console.error(error, 'not getting info')
        }

    }

async getPokeApiPokemons(){
    try {
        await pokemonsService.getPokeApiPokemons()
    } catch (error) {
        console.error(error, 'aint goin happen..')
    }
}



}