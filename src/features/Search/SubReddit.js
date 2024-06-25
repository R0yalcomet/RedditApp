import React from "react";
import { useDispatch } from "react-redux";
import { setFilterSubreddit, loadFeed } from "../Posts/PostsSlice";

const Subreddit = ({ subName }) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(setFilterSubreddit(subName));
        dispatch(loadFeed());
    }

    return (
        <li onClick={handleClick} value={subName}>{subName}</li>
    )
}

export default Subreddit;