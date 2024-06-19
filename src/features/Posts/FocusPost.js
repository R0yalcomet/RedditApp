import React from "react";
import Post from "./Post";
import Comments from "../Comments/Comments";

const Focus = () => {
    return (
        <div>
            <Post focus={true}/>
            <Comments />
        </div>
    )
};

export default Focus;