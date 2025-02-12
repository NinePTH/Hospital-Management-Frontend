import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/auth";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ Add this

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await loginUser(username, password);
        setMessage("Login successful! Redirecting...");
        navigate("/profile"); // ✅ Redirect after login
      } else {
        await registerUser(username, password);
        setMessage("Registration successful! Please login.");
        setIsLogin(true);
      }
    } catch (error: any) {
      setMessage(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Auth;
