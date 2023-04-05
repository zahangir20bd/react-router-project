import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold my-10">
        Hello from Posts {posts.length}
      </h1>
      <div className="grid md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
