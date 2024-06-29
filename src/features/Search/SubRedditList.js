import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSubreddits, loadSubreddits, loadingSubreddits } from "./SearchSlice";
import { clearSubredditFilter, loadFeed, subredditFilter } from "../Posts/PostsSlice";
import Subreddit from "./SubReddit";

const SubredditList = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectSubreddits);
    const isLoading = useSelector(loadingSubreddits);
    const currentFilter = useSelector(subredditFilter);

    const clearButtonClassNames = () => {
        if (!currentFilter) {
            return "filterButton active";
        } else {
            return "filterButton";
        }
    }

    const handleClear = () => { //clear subreddit filter then reload feed
        dispatch(clearSubredditFilter());
        dispatch(loadFeed());
    }

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <ul className="subreddits">
            <li className={clearButtonClassNames()} onClick={handleClear}>All</li>
            {list.map(subName => <Subreddit subName={subName}/>)}
        </ul>
    )
};

export default SubredditList;