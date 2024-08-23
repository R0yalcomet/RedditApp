import React from "react";

const Comment = ({ commentData }) => {
    return (
        <div className={`comment com${commentData.depth}`}>
            <p className="comAuthor">u/{commentData.author}</p>
            <p>{commentData.body}</p>
        </div>
    )
};

export default Comment;