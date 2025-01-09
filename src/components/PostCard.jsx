import React from "react";

function Post({post}){
    return (
        <div className="card">
            <img src={post.url} alt={post.title} />
            <figcaption>{post.title}</figcaption>
            <a href="#">
                ciao
            </a>
        </div>
    );
}

export default Post;