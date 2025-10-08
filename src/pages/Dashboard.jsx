import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-10 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-700 cursor-pointer">
        mygate
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-black font-medium">
        <Link to="#">Communities▼</Link>
        <Link to="#">Locks▼</Link>
        <Link to="#">Brands▼</Link>
        <Link to="#">Business</Link>
        <Link to="#">Company▼</Link>
        <Link to="#" className="text-purple-700">
          Login
        </Link>

        {/* Book Demo Button */}
        <button className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md">
          Book Demo
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
