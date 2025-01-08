import React from "react";

function Post({post}){
    return (
        <div className="card">
            <img src={post.url} alt={post.title} />
            <figcaption>{post.title}</figcaption>
        </div>
    );
}

export default Post;