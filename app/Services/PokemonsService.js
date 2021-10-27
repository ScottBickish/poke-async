// import { ProxyState  } from "../AppState.js"
// import { Pokemon } from "../Models/Pokemon.js"
import { ProxyState } from "../AppState.js"
import { pokeApi, sandboxApi } from "./AxiosService.js"



class PokemonsService{
    async getPokeApiPokemons(){
        const res = await pokeApi.get("")
        console.log(res.data.results)
        ProxyState.pokeApiPokemon = res.data.results
        
    }

    async getPokeApiPokemonInfo(){
        let info = ProxyState.getPokeApiPokemons

    }
}















export const pokemonsService = new PokemonsService()