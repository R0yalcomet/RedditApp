import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
    const ListComments = (comment) => {
        //recursively check for and display comments/replies
        return (
            <div key={comment.data.id}>
                {!comment.data.body ? null : <Comment commentData={comment.data}/>}
                {!comment.data.replies ? null : comment.data.replies.data.children.map(reply => ListComments(reply))}
            </div>
        )
    };

    return (
        <div className="comments">
            {comments.map((comment) => ListComments(comment))}
        </div>
    )
};

export default Comments;