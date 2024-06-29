import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFilterSubreddit, loadFeed, subredditFilter } from "../Posts/PostsSlice";

const Subreddit = ({ subName }) => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(subredditFilter);

    const subredditClassNames = () => {
        if (subName === currentFilter) {
            return "filterButton active";
        } else {
            return "filterButton";
        }
    }
    
    const handleClick = () => { //reload feed with posts from chosen subreddit
        dispatch(setFilterSubreddit(subName));
        dispatch(loadFeed());
    }

    //ToDo:
    //clearly display which subreddit is selected
    //add option to clear subreddit filter

    return (
        <li className={subredditClassNames()} onClick={handleClick} value={subName}>{subName}</li>
    )
}

export default Subreddit;