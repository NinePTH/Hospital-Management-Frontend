import React, { useState } from "react";
import AuthToggle from "./AuthToggle";

interface AuthFormProps {
  onSubmit: (username: string, password: string, role?: string, id?: string) => void;
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
  const [role, setRole] = useState("patient"); // Default role
  const [id, setId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onSubmit(username, password);
    } else {
      onSubmit(username, password, role, id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col">
        <label className="text-sm lg:text-md">Username</label>
        <input
          required
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="patient"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
        <label className="text-sm lg:text-md">Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*******"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
        
        {/* Only show role and ID fields on registration form */}
        {!isLogin && (
          <>
            <label className="text-sm lg:text-md">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 mb-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
            >
              <option value="patient" className="py-2">Patient</option>
              <option value="HR" className="py-2">HR</option>
              <option value="medical_personnel" className="py-2">Medical Personnel</option>
            </select>
            
            <label className="text-sm lg:text-md">ID</label>
            <input
              required
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
              placeholder="Employee ID/Patient ID"
            />
          </>
        )}
        
        <AuthToggle isLoginForm={isLogin} setIsLoginForm={setIsLoginForm} />
        <button type="submit" className="bg-[#2C6975] text-white py-1 px-1 lg:py-2 lg:px-2 rounded-md mt-4 border-2 border-[#2C6975] hover:bg-white hover:text-[#2C6975] active:scale-95 active:bg-[#2C6975] active:text-white transition duration-150">
          {isLogin ? "Login" : "Register"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
