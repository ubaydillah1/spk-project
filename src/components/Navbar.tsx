import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;