import React from "react";

const Comment = ({ commentData }) => {
    return (
        <div className="comment">
            <p>{commentData.author}</p>
            <p>{commentData.depth}</p>
            <p>{commentData.body}</p>
        </div>
    )
};

export default Comment;