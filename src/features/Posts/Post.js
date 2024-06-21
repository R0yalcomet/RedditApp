import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadPost } from "./PostsSlice";

const Post = ({ post, focus }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadPost(post.permalink));
        navigate(`/${post.id}`);
    };

    const main = () => {
        if (focus) {
            return (
                <div>
                    <h3>{post.title}</h3>
                    <h4>{post.selftext}</h4>
                    <img src={post.thumbnail}/>
                </div>
            )
        } else {
            return (
                <div onClick={handleClick}>
                    <h3>{post.title}</h3>
                    <img src={post.thumbnail}/>
                </div>
            )
        }
    }

    return (
        <div className="post">
            <p>{post.subreddit_name_prefixed}</p>
            <p>{post.author}</p>
            {main()}
            <p>{post.ups}</p>
            <p>{post.num_comments}</p>
        </div>
    )
};

export default Post;