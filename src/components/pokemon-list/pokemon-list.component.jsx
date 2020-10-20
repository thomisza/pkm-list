import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import PokemonItem from '../pokemon-item/pokemon-item.component';
import PokemonModal from '../pokemon-modal/pokemon-modal.component';

import './pokemon-list.style.scss';
import {selectFilteredPokemons } from '../../redux/pokemon/pokemon.selectors';


const PokemonList = () => {
    const pokemonList = useSelector(selectFilteredPokemons);
    const [showModal, setShowModal] = useState(false);

    const navigate = (expanded) => {
        console.log("expanded : ", expanded);
    }

    const openModal = (pkmId, showModal) => {
        setShowModal(!showModal);
    }

    return (
        <div className="list-container">
            <div className="grid-container">
                {pokemonList && pokemonList.map((elt, index) =>
                    <PokemonItem pokemon={elt} key={index} id={index} navigate={navigate}  openModal={openModal}/>
                )}
                {showModal && <PokemonModal/>}
            </div>
        </div>
    );
}

export default PokemonList;