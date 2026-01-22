import { use } from "react";
import Posts from "./postt.jsx";

export default function Post({ fetchPosts }) {
    const posts = use(fetchPosts); 

    return (
        <div className="card">
            <h2>Post Component</h2>

            {posts.map(post => (
                <Posts key={post.id} post={post} />
            ))}
        </div>
    );
}
