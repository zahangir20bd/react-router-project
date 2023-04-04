import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-center mt-4">
      <Link className="mr-4" to="/">
        Home
      </Link>
      <Link className="mr-4" to="/friends">
        Friends
      </Link>
      <Link className="mr-4" to="/posts">
        Posts
      </Link>
      <Link className="mr-4" to="/about">
        About
      </Link>
      <Link className="mr-4" to="/contact">
        Contact Us
      </Link>
    </div>
  );
};

export default NavBar;
