import React from "react";
import mockdata from "../../Util/mock";
import Post from "./Post";

const Posts = () => {
    const postData = mockdata.data.children;

    return (
        <div className="posts">
            {postData.map( (post) => <Post post={post.data}/>)}
        </div>
    )
};

export default Posts;