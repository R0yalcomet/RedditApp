import React from "react";
import Post from "./Post";
import Comments from "../Comments/Comments";
import { mockComments } from "../../Util/mock";

import { useSelector } from "react-redux";
import { isLoadingPost, selectFocus } from "./PostsSlice";

const Focus = () => {
    const post = useSelector(selectFocus);
    const isLoading = useSelector(isLoadingPost);

    if (isLoading) {
        return <div>Loading...</div>
    }

    const postData = mockComments[0].data.children[0];

    return (
        <div>
            <Post focus={true} post={post[0].data.children[0].data}/>
            <Comments />
        </div>
    )
};

export default Focus;