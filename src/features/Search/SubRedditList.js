import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, loadSubreddits, loadingSubreddits } from "./SearchSlice";
import Subreddit from "./SubReddit";

const SubredditList = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectSubreddits);
    const isLoading = useSelector(loadingSubreddits);

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <ul className="subreddits">
            {list.map(subName => <Subreddit subName={subName}/>)}
        </ul>
    )
};

export default SubredditList;