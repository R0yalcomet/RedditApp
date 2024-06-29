import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, focus }) => {

    const main = () => {
        //main component changes how the post is displayed depending on whether it is in focus or in the feed list
        if (focus) {
            //display more detailed post info
            return (
                <div className="postMain">
                    <h3>{post.title}</h3>
                    <h4>{post.selftext}</h4>
                    <img src={post.thumbnail}/>
                </div>
            )
        } else {
            //display basic post info and link to focus post view
            return (
                <Link className="postMain" to={`/${post.id}`}>
                    <h3>{post.title}</h3>
                    <img src={post.thumbnail}/>
                </Link>
            )
        }
    };

    return (
        <div className="post">
            <div className="postTopWidgets">
                <p className="postSub">Posted in: <b>{post.subreddit_name_prefixed}</b></p>
                <p className="postAuthor">by: <b>{post.author}</b></p>   
            </div>
            {main()}
            <div className="postBottomWidgets">
                <p className="postUpvotes">{post.ups}</p>
                <p className="postComments">{post.num_comments}</p>
            </div>
        </div>
    )
};

export default Post;