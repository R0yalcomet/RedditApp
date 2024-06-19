import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, focus }) => {
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
                <Link to={`/${post.id}`}>
                    <h3>{post.title}</h3>
                    <img src={post.thumbnail}/>
                </Link>
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