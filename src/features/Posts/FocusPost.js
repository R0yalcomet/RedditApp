import React from "react";
import Post from "./Post";
import Comments from "../Comments/Comments";
import mockdata from "../../Util/mock";

const Focus = () => {
    const postData = mockdata.data.children[0];

    return (
        <div>
            <Post focus={true} post={postData.data}/>
            <Comments />
        </div>
    )
};

export default Focus;