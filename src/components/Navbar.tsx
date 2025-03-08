import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center p-4">
        {/* Logo */}
        {/* <Link to="/" className="text-2xl font-bold text-[#2C6975]">
          Siam Hospital
        </Link> */}

        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-[#2C6975]">Home</Link></li>
          <li><Link to="/" className="hover:text-[#2C6975]">About</Link></li>
          <li><Link to="/" className="hover:text-[#2C6975]">Login</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
