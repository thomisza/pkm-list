import {PokemonActionTypes} from './pokemon.types'

const INITIAL_STATE = {
    pokemons:null,
    isFetching: false,
    errorMessage:undefined
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PokemonActionTypes.GET_POKEMONS_START:
            return {
                ...state,
                isFetching: true
            }
        case PokemonActionTypes.GET_POKEMONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pokemons: action.payload
            }
        case PokemonActionTypes.GET_POKEMONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default pokemonReducer;