import React , { useContext }from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = async() => {
    logoutUser();
    await new Promise((resolve) => setTimeout(resolve, 250));
    auth?.setAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-soft fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/logo.webp" alt="logo" className="h-8" />
          <p className="text-base leading-5 font-semibold text-[#2C6975]">
            Siam
            <br />
            Hospital
          </p>
        </div>

        {/* <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-[#2C6975]">Home</Link></li>
          <li><Link to="/" className="hover:text-[#2C6975]">About</Link></li>
          <li><Link to="/" className="hover:text-[#2C6975]">Login</Link></li>
        </ul> */}
        {
        auth?.isAuthenticated && <button onClick={handleLogout} className="bg-[#2C6975] text-white py-1 px-4 lg:px-6 rounded-md active:scale-95 active:bg-[#25444e] transition duration-150">
          Logout
        </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;
