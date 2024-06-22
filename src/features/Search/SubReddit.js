import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, loadSubreddits, loadingSubreddits } from "./SearchSlice";

const Subreddits = () => {
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
        <ul>
            {list.map(subName => <li>{subName}</li>)}
        </ul>
    )
};

export default Subreddits;