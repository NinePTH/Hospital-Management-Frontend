import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";
import AuthForm from "../components/AuthForm";
import Navbar from "../components/Navbar";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleAuth = async (username: string, password: string, role?: string, id?: string) => {
    try {
      if (isLoginForm) {
        await loginUser(username, password);
        auth?.setAuthenticated(true);
        setMessage("Login successful! Redirecting...");
        setMessageStyle("text-sm text-green-600 text-center");
        await new Promise((resolve) => setTimeout(resolve, 750));
        switch (auth?.userRole) {
          case "patient":
            navigate("/patient-profile");
            break;
          case "HR":
            navigate("/employees-management");
            break;
          case "medical_personal":
            navigate("/patients-management");
            break;
          default:
            break;
        }
      } else {
        await registerUser(username, password, role, id);
        setMessage("Registration successful! Please login.");
        setMessageStyle("text-sm text-green-600 text-center");
        setIsLoginForm(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessage(error.response.data || "Wrong Username or Password");
      setMessageStyle("text-sm text-red-600 text-center");
    }
  };

  return (
    <div className="min-h-screen md:h-dvh flex flex-col items-center justify-center bg-[url(/background.webp)]  bg-cover bg-center bg-no-repeat">
        <Navbar />
        <div className="flex flex-col items-center justify-center border border-[#ACACAC] rounded-md w-2/3 md:w-2/5 lg:w-1/3 h-3/5 lg:h-5/6 lg:max-w-[350px] lg:max-h-[525px] p-10 md:p-10 lg:p-12 bg-white">
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
        </div>
    </div>
  );
};

export default Auth;
