import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "./Post";
import { loadFeed, selectAllPosts, isLoadingFeed } from "./PostsSlice";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const isLoading = useSelector(isLoadingFeed);

    useEffect(() => {
        dispatch(loadFeed());
    }, [dispatch]);

    if (isLoading) {
        return <div className="loading">Loading...</div>
    };

    return (
        <div className="posts">
            {posts.map( (post) => <Post key={post.data.id} post={post.data}/>)}
        </div>
    )
};

export default Posts;