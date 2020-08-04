import { PokemonActionTypes } from './pokemon.types';

export const getPokemonsStart = () => ({
    type: PokemonActionTypes.GET_POKEMONS_START
})

export const getPokemonsSuccess = (pokemons) => ({
    type: PokemonActionTypes.GET_POKEMONS_SUCCESS,
    payload:pokemons
});

export const getPokemonsFailure = (error) => ({
    type: PokemonActionTypes.GET_POKEMONS_FAILURE,
    payload:error
});

