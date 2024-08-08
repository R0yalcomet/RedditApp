import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, focus }) => {

    const epoch = new Date(post.created_utc * 1000);
    const created = epoch.toLocaleString()

    const main = () => {
        //main component changes how the post is displayed depending on whether it is in focus or in the feed list
        if (focus) {
            //display more detailed post info
            return (
                <div className="postMain">
                    <h3>{post.title}</h3>
                    <h4>{post.selftext}</h4>
                    {post.post_hint === "image" ? <img src={post.thumbnail}/> : null}
                </div>
            )
        } else {
            //display basic post info and link to focus post view
            return (
                <Link className="postMain" to={`/${post.id}`}>
                    <h3>{post.title}</h3>
                    {post.post_hint === "image" ? <img src={post.url}/> : null}
                </Link>
            )
        }
    };

    return (
        <div className="post">
            <div className="postTopWidgets">
                <p className="postSub">Posted in: <b>{post.subreddit_name_prefixed}</b></p>
                <p className="postAuthor">by: <b>{post.author}</b></p>   
                <p>{created}</p>
            </div>
            {main()}
            <div className="postBottomWidgets">
                <p className="postUpvotes">Upvotes: <b>{post.ups}</b></p>
                <p className="postComments">Comments: <b>{post.num_comments}</b></p>
            </div>
        </div>
    )
};

export default Post;