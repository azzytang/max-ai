import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center p-4 bg-black text-white justify-center w-dvw h-25">
      <Link
        to="/"
        className="text-2xl font-bold mr-6 hover:text-gray-400 hover:bg-gray-800 rounded-md p-2 mr-200"
      >
        Max AI
      </Link>
      <Link
        to="/about"
        className="text-2xl font-bold mr-6 hover:text-gray-400 hover:bg-gray-800 rounded-md p-2"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-2xl font-bold mr-6 hover:text-gray-400 hover:bg-gray-800 rounded-md p-2"
      >
        Contact
      </Link>
      <Link
        to="/programs"
        className="text-2xl bg-blue-500 font-bold mr-6 hover:text-gray-400 hover:bg-gray-800 rounded-md p-2"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Navbar;
