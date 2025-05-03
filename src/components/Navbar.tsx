import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { animateScroll } from 'react-scroll'

const medicalPersonnelSystemLinks = [
  { path: "/patients-management/add-patient", label: "Add Patient" },
  { path: "/patients-management/edit-patient", label: "Edit Patient" },
  { path: "/patients-management/add-patient-appointment", label: "Patient Appointment" },
  { path: "/patients-management/add-patient-medical-history", label: "Patient History" },
  { path: "/patients-management/search-patient", label: "Patient Information" },
];

const hrSystemLinks = [
  { path: "/employees-management/add-employee", label: "Add Employee" },
  { path: "/employees-management/edit-employee", label: "Edit Employee" },
  { path: "/employees-management/search-employee", label: "Employee Information" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const location = useLocation();
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const basePath = location.pathname.split("/")[1];

  const handleLogin = async () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    logoutUser();
    await new Promise((resolve) => setTimeout(resolve, 250));
    auth?.setAuthenticated(false);
    navigate("/");
  };

  const authButton = auth?.isAuthenticated ? (
    <button
      onClick={handleLogout}
      className="bg-white font-medium text-[#2C6975] border-[2px] border-[#2C6975] py-1 px-6 text-xl lg:text-lg rounded-md hover:bg-[#2C6975] hover:text-white active:scale-95 active:bg-white active:text-[#2C6975] transition duration-150"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={handleLogin}
      className="bg-white font-medium text-[#2C6975] border-[2px] border-[#2C6975] py-1 px-6 text-xl lg:text-lg rounded-md hover:bg-[#2C6975] hover:text-white active:scale-95 active:bg-white active:text-[#2C6975] transition duration-150"
    >
      Login
    </button>
  );

  const systemNav =auth?.isAuthenticated && location.pathname === "/" ? (
    <ul className="flex space-x-6">
      <li>
        <Link
          to="/system"
          className="text-2xl lg:text-lg font-medium text-[#2C6975] hover:text-gray-600"
        >
          System
        </Link>
      </li>
    </ul>
  ) : null

  return (
    <nav className="bg-white shadow-soft fixed top-0 left-0 w-full z-10">
      <div className="w-full flex justify-between items-center px-6 md:px-20 lg:px-28 py-3">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            animateScroll.scrollToTop()
            setIsExpand(false)
            }}
          >
          <img src="/logo.webp" alt="logo" className="h-8" />
          <p className="text-base leading-5 font-semibold text-[#2C6975]">
            Siam
            <br />
            Hospital
          </p>
        </Link>

        <div className="lg:hidden" onClick={() => setIsExpand(!isExpand)}>
          <IconContext.Provider value={{ color: "#2C6975" }}>
            {isExpand ? (
              <RxCross2 className="size-8" />
            ) : (
              <RxHamburgerMenu className="size-8" />
            )}
          </IconContext.Provider>
        </div>

        <div className="hidden lg:flex flex-row items-center justify-center gap-8">
          {systemNav}
          {authButton}
        </div>
      </div>
      <AnimatePresence>
        {isExpand && (
          <motion.div
            className="h-dvh py-10 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-14">
              {basePath === "patients-management" ? (
                medicalPersonnelSystemLinks.map((link) => {
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsExpand(false)}
                      className="text-2xl lg:text-lg font-medium text-[#2C6975] hover:text-gray-600"
                    >
                      {link.label}
                    </Link>
                  );
                })
              ) : basePath === "employees-management" ? (
                hrSystemLinks.map((link) => {
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsExpand(false)}
                      className="text-2xl lg:text-lg font-medium text-[#2C6975] hover:text-gray-600"
                    >
                      {link.label}
                    </Link>
                  );
                })
              ) : null}
              {systemNav}
              {authButton}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
