import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, email, phone } = friend;
  return (
    <div className=" border-2 border-red-500 m-4 p-3 rounded-xl ">
      <h3 className="text-2xl">ID: {id}</h3>
      <h3 className="text-3xl font-bold my-2">Name: {name}</h3>
      <p className="text-xl my-2">Direct: {phone}</p>
      <p className="text-xl">Email: {email}</p>
      <p className="mt-4 bg-cyan-500 p-3 rounded-md text-2xl ">
        <Link to={`/friend/${id}`}>Details</Link>
      </p>
    </div>
  );
};

export default Friend;
