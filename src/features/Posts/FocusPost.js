import React from "react";
import Post from "./Post";
import Comments from "../Comments/Comments";
import { mockComments } from "../../Util/mock";

const Focus = () => {
    const postData = mockComments[0].data.children[0];

    return (
        <div>
            <Post focus={true} post={postData.data}/>
            <Comments />
        </div>
    )
};

export default Focus;