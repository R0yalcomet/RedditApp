import React from "react";
import Post from "./Post";
import Comments from "../Comments/Comments";
import { mockComments } from "../../Util/mock";

import { useSelector, useDispatch } from "react-redux";
import { isLoadingPost, selectFocus, loadPost } from "./PostsSlice";
import { useEffect } from "react";

const Focus = () => {
    const dispatch = useDispatch();
    const post = useSelector(selectFocus);
    const isLoading = useSelector(isLoadingPost);

    useEffect(() => {
        const id = window.location.pathname;
        dispatch(loadPost(id));
    }, [dispatch])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (post[0]) {
        return (
            <div>
                <Post focus={true} post={post[0].data.children[0].data}/>
                <Comments comments={post[1].data.children}/>
            </div>
        )
    }
};

export default Focus;