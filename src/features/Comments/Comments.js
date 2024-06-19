import React from "react";
import Comment from "./Comment";
import { mockComments } from "../../Util/mock";

const Comments = () => {
    const commentsData = mockComments[1].data.children;

    const ListComments = (comment) => {
        if (comment.data.replies) {
            const replies = comment.data.replies.data.children;
            return (
                <>
                    <Comment commentData={comment.data}/>
                    {replies.map(reply => ListComments(reply))}
                </>
            )
        } else {
            return (
                <Comment commentData={comment.data}/>
            ) 
        }
    };

    return (
        <div className="comments">
            {commentsData.map((comment) => ListComments(comment))}
        </div>
    )
};

export default Comments;