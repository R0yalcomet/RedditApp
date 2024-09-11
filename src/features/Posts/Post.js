import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, focus }) => {

    const epoch = new Date(post.created_utc * 1000);
    let created = (new Date() - epoch)/(1000*60);
    let postAge;
    if (created < 60) {
        postAge = `${Math.round(created)}min`;
    } else {
        created = created/60;
        if (created < 24) {
            postAge = `${Math.round(created)}h`;
        } else {
            created = created/24;
            if (created < 30) {
                postAge = `${Math.round(created)}d`;
            } else if (created < 365) {
                postAge = `${Math.round(created/30)}mo`
            } else {
                postAge = `${Math.round(created/365)}y`
            }
        }
    }

    const main = () => {
        //main component changes how the post is displayed depending on whether it is in focus or in the feed list
        if (focus) {
            //display more detailed post info
            return (
                <div id="focusMain" className="postMain">
                    <h3>{post.title}</h3>
                    <div id="imgContainer">{post.post_hint === "image" ? <img alt="" src={post.url}/> : null}</div>
                    {post.selftext ? <h4>{post.selftext}</h4> : null}
                </div>
            )
        } else {
            //display basic post info and link to focus post view
            return (
                <Link id="previewMain" className="postMain" to={`/r/${post.subreddit}/comments/${post.id}`}>
                    <h3>{post.title}</h3>
                    {post.post_hint === "image" ? <img alt="" src={post.url}/> : null}
                </Link>
            )
        }
    };

    return (
        <div className="post">
            <div className="postTopWidgets">
                <p className="postSub">Posted in: <b>{post.subreddit_name_prefixed}</b></p>
                <p className="postAuthor">by: <b>u/{post.author}</b></p>   
                <p className="postAge">{postAge}</p>
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