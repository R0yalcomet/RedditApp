import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, focus }) => {

    const main = () => {
        //main component changes how the post is displayed depending on whether it is in focus or in the feed list
        if (focus) {
            //display more detailed post info
            return (
                <div>
                    <h3>{post.title}</h3>
                    <h4>{post.selftext}</h4>
                    <img src={post.thumbnail}/>
                </div>
            )
        } else {
            //display basic post info and link to focus post view
            return (
                <Link to={`/${post.id}`}>
                    <h3>{post.title}</h3>
                    <img src={post.thumbnail}/>
                </Link>
            )
        }
    };

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