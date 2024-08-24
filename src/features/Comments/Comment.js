import React from "react";

const Comment = ({ commentData }) => {
    if (commentData.depth > 10) {
        return null;
    }
    return (
        <div className={`comment com${commentData.depth}`}>
            <p className="comAuthor">u/{commentData.author}</p>
            <p>{commentData.body}</p>
        </div>
    )
};

export default Comment;