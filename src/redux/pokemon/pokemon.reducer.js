import {PokemonActionTypes} from './pokemon.types'

const INITIAL_STATE = {
    pokemons:null,
    isFetching: false,
    errorMessage:undefined,
    searchText:undefined,
    filteredPokemons: null
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
                pokemons: action.payload,
                filteredPokemons: action.payload
            }
        case PokemonActionTypes.GET_POKEMONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case PokemonActionTypes.SEARCH_POKEMON:
            var tempPkms = state.pokemons;
            return {
                ...state,
                filteredPokemons: action.payload != "" ? tempPkms.filter(pkm => pkm.name.includes(action.payload)) : state.pokemons
            }
        default:
            return state;
    }
}

export default pokemonReducer;