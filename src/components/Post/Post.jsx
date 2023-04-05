import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const { id, title, body } = post;
  return (
    <div className="text-center border-2 p-4 border-lime-500 rounded-lg">
      <h3>ID: {id}</h3>
      <h2>Title: {title}</h2>
      <Link className="mr-2 text-blue-700" to={`/post/${id}`}>
        Details
      </Link>
      <Link to={`/post/${id}`}>
        <button className="bg-green-500 p-1 rounded mr-2">
          Details Link BTN
        </button>
      </Link>
      <button
        onClick={() => navigate(`/post/${id}`)}
        className="bg-yellow-500 p-1 rounded"
      >
        Details Button
      </button>
    </div>
  );
};

export default Post;
