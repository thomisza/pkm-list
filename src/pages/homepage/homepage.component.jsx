import React, {useEffect} from 'react';
import PokemonList from '../../components/pokemon-list/pokemon-list.component';
import { connect } from 'react-redux';
import {getPokemonsStart} from '../../redux/pokemon/pokemon.actions';
import './homepage.style.scss';

const HomePage = ({getPokemonsStart}) => {
  useEffect(() => {
      getPokemonsStart();
  }, [])

    return (
        <div>
            <h1 className="title">POKEMON LIST</h1>
            <PokemonList/>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
  getPokemonsStart: () => dispatch(getPokemonsStart())
})

export default connect(null, mapDispatchToProps)(HomePage);