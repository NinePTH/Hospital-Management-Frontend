import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/UseAuth";

interface RoleBasedRouteProps {
  children: JSX.Element;
  allowedRoles: string[];
  redirectTo?: string;
}

const RoleBasedRoute = ({ 
  children, 
  allowedRoles, 
  redirectTo = "/" 
}: RoleBasedRouteProps) => {
  const { isAuthenticated, userRole } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  if (userRole && allowedRoles.includes(userRole)) {
    return children;
  }
  
  return <Navigate to={redirectTo} />;
};

export default RoleBasedRoute;