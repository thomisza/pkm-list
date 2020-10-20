import React from 'react';
import './pokemon-item.style.scss';

const PokemonItem = ({pokemon: {name, url}, navigate, openModal, show}) => {
    const id = url.substring(url.lastIndexOf('n/')+2, url.lastIndexOf('/'));

    const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    console.log("show : ", show);


    return (
        <div className="pokemon-container" onClick={() => openModal(!show)}>

            <div className="image-container">
                <img className="pokemon-image" src={image} alt="pokemon" />
            </div>
            <div className="text-container">
                <p>{name.toUpperCase()}</p>
            </div>
        </div>
    );
}

export default PokemonItem;