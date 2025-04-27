import { useContext, useState } from "react";
import { loginUser, registerUser } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";
import AuthForm from "../components/auth/AuthForm";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Auth:React.FC = (): JSX.Element => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const handleAuth = async (username: string, password: string, role?: string, id?: string) => {
    try {
      if (isLoginForm) {
        const userRole = await loginUser(username, password);
        setMessage("Login successful! Redirecting...");
        setMessageStyle("text-sm text-green-600 text-center");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        auth?.setAuthenticated(true);
        auth?.setUserRole(userRole);
        navigate("/")
      } else {
        await registerUser(username, password, role, id);
        setMessage("Registration successful! Please login.");
        setMessageStyle("text-sm text-green-600 text-center");
        await new Promise((resolve) => setTimeout(resolve, 500));
        setIsLoginForm(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessage(error.response.data || "Wrong Username or Password");
      setMessageStyle("text-sm text-red-600 text-center");
    }
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center pt-[22.5%] pb-[7.5%] md:pt-[12.5%] md:pb-[5%] lg:pt-[7%] lg:pb-[2.75%]  bg-[url(/background.webp)]  bg-cover bg-center bg-no-repeat">
        <Navbar />
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center shadow-soft rounded-md w-fit h-fit p-10 lg:p-12 bg-white">
          <h2 className="text-3xl mb-1 lg:text-4xl lg:mb-2 font-playfair">
            {isLoginForm ? "Login" : "Register"}
          </h2>
          <h3 className="mb-1 md:mb-2 lg:text-xl">Siam Hospital</h3>
          <AuthForm
            onSubmit={handleAuth}
            isLogin={isLoginForm}
            setIsLoginForm={setIsLoginForm}
          />
          {message && <p className={messageStyle}>{message}</p>}
        </motion.div>
    </div>
  );
};

export default Auth;
