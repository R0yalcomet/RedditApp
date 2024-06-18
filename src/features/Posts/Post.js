import React from "react";

const Post = ({ post }) => {
    return (
        <div>
            <p>{post.subreddit_name_prefixed}</p>
            <p>{post.author}</p>
            <h3>{post.title}</h3>
            <img src={post.thumbnail}/>
            <p>{post.ups}</p>
            <p>{post.num_comments}</p>
        </div>
    )
};

export default Post;