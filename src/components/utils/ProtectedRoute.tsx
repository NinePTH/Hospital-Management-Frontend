import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/UseAuth";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
