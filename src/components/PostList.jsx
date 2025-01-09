import React from "react";
import Post from './PostCard';


function PostTab ({posts}) {
    return (
        <div className="post-list">
            {posts.map((post) =>(
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostTab;