import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "./Post";
import Comments from "../Comments/Comments";
import { isLoadingPost, selectFocus, loadPost } from "./PostsSlice";

const Focus = () => {   //display a single post with more info and comments
    const dispatch = useDispatch();
    const post = useSelector(selectFocus);
    const isLoading = useSelector(isLoadingPost);

    useEffect(() => {
        //grab pathname from window to prevent errors caused by page refresh
        const id = window.location.pathname;
        dispatch(loadPost(id));
    }, [dispatch])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (post[0]) {
        return (
            <div id="focus">
                <Post focus={true} post={post[0].data.children[0].data}/>
                <Comments comments={post[1].data.children}/>
            </div>
        )
    }
};

export default Focus;