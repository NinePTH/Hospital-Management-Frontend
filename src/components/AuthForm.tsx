import React, { useState } from "react";
import AuthToggle from "./AuthToggle";

interface AuthFormProps {
  onSubmit: (username: string, password: string) => void;
  isLogin: boolean;
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  isLogin,
  setIsLoginForm,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col">
        <label className="lg:text-md">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md md:py-1 md:px-2 lg:py-2 lg:px-4 mb-4"
        />
        <label  className="lg:text-md">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md md:py-1 md:px-2 lg:py-2 lg:px-4 mb-4"
        />
        <AuthToggle isLoginForm={isLogin} setIsLoginForm={setIsLoginForm} />
        <button type="submit" className="bg-[#2C6975] text-white md:py-1 md:px-1 lg:py-2 ;g:px-2 rounded-md mt-4 active:scale-95 active:bg-[#25444e] transition duration-150">{isLogin ? "Login" : "Register"}</button>
      </div>
    </form>
  );
};

export default AuthForm;
