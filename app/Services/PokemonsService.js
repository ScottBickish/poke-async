// import { ProxyState  } from "../AppState.js"
// import { Pokemon } from "../Models/Pokemon.js"
import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokeApi, sandboxApi } from "./AxiosService.js"



class PokemonsService{
    async getPokeApiPokemons(){
        const res = await pokeApi.get("")
        console.log(res.data.results)
        ProxyState.pokeApiPokemon = res.data.results
        
    }

    async getPokeApiPokemonInfo(name){
        const info = await pokeApi.get(name)
        const pokemon = new Pokemon(info.data)
        ProxyState.activePokemon = pokemon


    }
}















export const pokemonsService = new PokemonsService()