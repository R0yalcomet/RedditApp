import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
    const ListComments = (comment) => {
        //iterates through replies until all comments are shown
        if (comment.data.replies) {
            //return comment and input replies back into this function
            const replies = comment.data.replies.data.children;
            return (
                <>
                    {!comment.data.body ? null : <Comment key={comment.data.id} commentData={comment.data}/>}
                    {replies.map(reply => ListComments(reply))}
                </>
            )
        } else {
            //return a comment with no replies
            return (
                !comment.data.body ? null : <Comment key={comment.data.id} commentData={comment.data}/>
            ) 
        }
    };

    return (
        <div className="comments">
            {comments.map((comment) => ListComments(comment))}
        </div>
    )
};

export default Comments;