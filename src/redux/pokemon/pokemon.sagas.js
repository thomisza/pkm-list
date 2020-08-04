import {takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import { getPokemonsSuccess, getPokemonsFailure } from './pokemon.actions';

import {PokemonActionTypes} from './pokemon.types';

const URL = "https://pokeapi.co/api/v2/pokemon/"


const fetchPokemons = async () => {
    const response = await axios.get(URL);
    return response.data.results;
}

export function* getPokemonsAsync() {
    try{
        const pokemons = yield call(fetchPokemons);
        yield put(getPokemonsSuccess(pokemons))
    }catch (error){
        yield put(getPokemonsFailure(error));
    }
}

export function* getPokemonStart() {
    yield takeLatest(
        PokemonActionTypes.GET_POKEMONS_START,
        getPokemonsAsync
    );
}

export function* pokemonSagas() {
    yield all([call(getPokemonStart)]);
}