import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";
import AuthForm from "../components/AuthForm";
import Navbar from "../components/Navbar";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleAuth = async (username: string, password: string) => {
    try {
      if (isLoginForm) {
        await loginUser(username, password);
        auth?.setAuthenticated(true);
        setMessage("Login successful! Redirecting...");
        navigate("/profile");
      } else {
        await registerUser(username, password);
        setMessage("Registration successful! Please login.");
        setIsLoginForm(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessage(error.response?.data?.error || "Wrong Username or Password");
    }
  };

  return (
    <div className="h-screen md:h-dvh flex flex-col items-center justify-center bg-[url(/background.webp)]  bg-cover bg-center bg-no-repeat">
        <Navbar />
        <div className="flex flex-col items-center justify-center border border-[#ACACAC] rounded-md w-2/3 md:w-2/5 lg:w-1/3 h-3/5 lg:max-w-[350px] lg:max-h-[450px] p-10 md:p-10 lg:p-12 bg-white">
          <h2 className="text-3xl mb-1 lg:text-4xl lg:mb-2 font-playfair">
            {isLoginForm ? "Login" : "Register"}
          </h2>
          <h3 className="mb-1 md:mb-2 lg:text-xl">Siam Hospital</h3>
          <AuthForm
            onSubmit={handleAuth}
            isLogin={isLoginForm}
            setIsLoginForm={setIsLoginForm}
          />
          {message && <p className="text-red-600">{message}</p>}
        </div>
    </div>
  );
};

export default Auth;
