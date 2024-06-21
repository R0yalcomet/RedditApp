import React from "react";
import { mockdata } from "../../Util/mock";
import Post from "./Post";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFeed, selectAllPosts } from "./PostsSlice";


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    useEffect(() => {
        dispatch(loadFeed());
    }, [dispatch]);

    return (
        <div className="posts">
            {posts.map( (post) => <Post post={post.data}/>)}
        </div>
    )
};

export default Posts;