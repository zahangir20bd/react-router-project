import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  console.log(post);
  return (
    <div className="text-center mt-12">
      <h2 className="text-4xl font-bold my-8">
        Details about the post ID: {id}
      </h2>
      <div className="border-2 border-gray-600 mx-56 p-4">
        <h5 className="text-2xl font-semibold">ID: {id}</h5>
        <h3 className="text-3xl font-bold my-3">Title: {title}</h3>
        <p className="text-xl">{body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
