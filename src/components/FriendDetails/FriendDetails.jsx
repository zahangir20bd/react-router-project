import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { id, name, email, address, phone, website, company } = friend;
  return (
    <div className="text-center m-14">
      <h2 className="text-4xl font-bold my-10">Details About my Friend {id}</h2>
      <div className=" border-orange-500 border-2 mx-40 rounded-xl">
        <h3 className="text-4xl font-bold mb-3">Full Name: {name}</h3>
        <p className="text-2xl my-2">He works in {company.name}</p>
        <p className="text-2xl my-2">Phone No: {phone}</p>
        <p className="text-2xl my-2">Email: {email}</p>
        <p className="text-2xl my-2">Website: {website}</p>
        <p className="text-2xl my-2">
          Address: {address.street}, {address.suite}, {address.city} -
          {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default FriendDetails;
