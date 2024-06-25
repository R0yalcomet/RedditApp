import React from "react";
import { useDispatch } from "react-redux";

import { setFilterSubreddit, loadFeed } from "../Posts/PostsSlice";

const Subreddit = ({ subName }) => {
    const dispatch = useDispatch();
    
    const handleClick = () => { //reload feed with posts from chosen subreddit
        dispatch(setFilterSubreddit(subName));
        dispatch(loadFeed());
    }

    //ToDo:
    //clearly display which subreddit is selected
    //add option to clear subreddit filter

    return (
        <li onClick={handleClick} value={subName}>{subName}</li>
    )
}

export default Subreddit;