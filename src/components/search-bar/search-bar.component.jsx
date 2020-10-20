import React from 'react';
import {useDispatch} from 'react-redux'
import {search} from '../../redux/search/search.actions';

import './search-bar.style.scss';

const SearchBar = () => {
    const dispatch = useDispatch();

    return (
        <div className="search-container">
            <input className="search" type="text" onChange={(e) => dispatch(search(e.target.value))}/>
        </div>
    );
}



export default SearchBar;