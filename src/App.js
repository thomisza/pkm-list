import React from 'react';
import './App.css';
import PokemonList from './components/pokemon-list/pokemon-list.component';
import HomePage from './pages/homepage/homepage.component';

import {Provider} from 'react-redux';
import { store } from './redux/store';

const App = ()=> {
  return (

    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
