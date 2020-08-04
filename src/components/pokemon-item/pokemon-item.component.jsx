import React, {useState} from 'react';
import './pokemon-item.style.scss';

const PokemonItem = ({pokemon: {name, url}, navigate, id}) => {
    const image = `https://pokeres.bastionbot.org/images/pokemon/${id+1}.png`;
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="pokemon-container" onClick={() => setExpanded(!expanded)}>
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