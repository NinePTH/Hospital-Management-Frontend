import React , { useContext }from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
    auth?.setAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <p className="text-2xl font-bold text-[#2C6975]">
          Siam Hospital
        </p>

        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-[#2C6975]">Home</Link></li>
          <li><Link to="/" className="hover:text-[#2C6975]">About</Link></li>
          <li><Link to="/" className="hover:text-[#2C6975]">Login</Link></li>
        </ul>

        <button onClick={handleLogout} className="bg-[#2C6975] text-white py-1 px-1 lg:px-6 rounded-md active:scale-95 active:bg-[#25444e] transition duration-150">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
