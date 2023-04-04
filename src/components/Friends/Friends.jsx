import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="text-center mt-10">
      <h1
        className="text-4xl font-semi
       mb-10"
      >
        These are all my Friends
      </h1>
      <div className="grid md:grid-cols-3">
        {data.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
