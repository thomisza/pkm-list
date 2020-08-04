import React from 'react';
import { useSelector } from 'react-redux';
import PokemonItem from '../pokemon-item/pokemon-item.component';
import './pokemon-list.style.scss';
import {selectPokemons, selectFilteredPokemons } from '../../redux/pokemon/pokemon.selectors';


const PokemonList = () => {
    const pokemonList = useSelector(selectFilteredPokemons);

    const navigate = (expanded) => {
        console.log(expanded);
    }

    return (
        <div className="list-container">
            <div className="grid-container">
                {pokemonList && pokemonList.map((elt, index) =>
                    <PokemonItem pokemon={elt} key={index} id={index} navigate={navigate}/>
                )}
            </div>
        </div>
    );
}

export default PokemonList;