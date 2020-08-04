import React, {useEffect} from 'react';
import PokemonList from '../../components/pokemon-list/pokemon-list.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import { connect } from 'react-redux';
import {getPokemonsStart} from '../../redux/pokemon/pokemon.actions';

import './homepage.style.scss';

const HomePage = ({getPokemonsStart}) => {
  useEffect(() => {
      getPokemonsStart();
  }, [])

  return (
      <div className="homepage-container">
        <h1 className="title-text"> LIST</h1>
        <SearchBar />
        <PokemonList/>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  getPokemonsStart: () => dispatch(getPokemonsStart())
})

export default connect(null, mapDispatchToProps)(HomePage);