import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {search} from '../../redux/search/search.actions';

import './search-bar.style.scss';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    return (
        <div className="search-container">
            <input className="search" type="text" onChange={(e) => dispatch(search(e.target.value))}/>
        </div>
    );
}



export default SearchBar;