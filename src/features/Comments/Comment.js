import React from "react";

const Comment = ({ commentData }) => {
    return (
        <div>
            <p>{commentData.body}</p>
        </div>
    )
};

export default Comment;