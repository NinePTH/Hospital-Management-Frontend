import React from "react";

interface AuthToggleProps {
  isLoginForm: boolean;
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isLoginForm, setIsLoginForm }) => {
  return (
    <div onClick={() => setIsLoginForm(!isLoginForm)} className="cursor-pointer">
      {isLoginForm ? (
        <div className="text-sm text-center">
            Don't have an account? <span className="text-[#2C6975] underline">Register</span>
        </div>
      ) : (
        <div className="text-sm text-center">
            Already have an account? <span className="text-[#2C6975] underline">Login</span>
        </div>
      )}
    </div>
  );
};

export default AuthToggle;
