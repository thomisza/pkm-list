import React from 'react';
import { useSelector } from 'react-redux';
import PokemonItem from '../pokemon-item/pokemon-item.component';
import './pokemon-list.style.scss';

const PokemonList = () => {
    const pokemonList2 = useSelector(state => state.pokemon.pokemons);

    const navigate = (expanded) => {
        console.log(expanded);
    }

    return (
        <div className="container">
            <div className="grid-container">
                {pokemonList2 && pokemonList2.map((elt, index) =>
                    <PokemonItem pokemon={elt} key={index} id={index} navigate={navigate}/>
                )}
            </div>
        </div>
    );
}

export default PokemonList;