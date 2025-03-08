import React from "react";

interface AuthToggleProps {
  isLoginForm: boolean;
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isLoginForm, setIsLoginForm }) => {
  return (
    <div onClick={() => setIsLoginForm(!isLoginForm)} className="select-none">
      {isLoginForm ? (
        <div className="text-xs md:text-sm text-center">
            Don't have an account? <span className="text-[#2C6975] underline cursor-pointer">Register</span>
        </div>
      ) : (
        <div className="text-xs md:text-sm text-center">
            Already have an account? <span className="text-[#2C6975] underline cursor-pointer">Login</span>
        </div>
      )}
    </div>
  );
};

export default AuthToggle;
