import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { loadFeed } from "../Posts/PostsSlice";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        setSearchTerm(target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(loadFeed(searchTerm));
    };

    return (
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search..." onChange={handleChange} value={searchTerm}/>
            <button type="submit"><img src=""/></button>
        </form>
    )
};

export default Search;