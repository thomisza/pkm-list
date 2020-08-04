import { createSelector } from 'reselect';

const selectAllPokemons = state => state.pokemon;

export const selectPokemons = createSelector(
    [selectAllPokemons],
    pokemon => pokemon.pokemons
);

export const selectFilteredPokemons = createSelector(
    [selectAllPokemons],
    pokemon => pokemon.filteredPokemons
);
