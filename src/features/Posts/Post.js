import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, focus }) => {
    return (
        <div className="post">
            <p>{post.subreddit_name_prefixed}</p>
            <p>{post.author}</p>
            <Link to={focus ? null : `/${post.id}`}>
                <h3>{post.title}</h3>
                <img src={post.thumbnail}/>
            </Link>
            <p>{post.ups}</p>
            <p>{post.num_comments}</p>
        </div>
    )
};

export default Post;