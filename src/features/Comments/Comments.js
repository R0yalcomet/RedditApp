import React from "react";
import Comment from "./Comment";
import { mockComments } from "../../Util/mock";

const Comments = () => {
    const commentsData = mockComments[1].data.children;

    return (
        <div>
            {commentsData.map((comment) => <Comment commentData={comment.data}/>)}
        </div>
    )
};

export default Comments;