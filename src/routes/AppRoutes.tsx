import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import MyInfo from "../pages/MyInfo";
// import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AppRoutes = () => {
  const auth = useContext(AuthContext);

  const HomeRoute = () => {
    if (auth?.isAuthenticated) {
      if (auth?.userRole === "patient") return <Navigate to="/patient-profile" />;
      else if (auth?.userRole === "HR") return <Navigate to="/employees-management" />;
      else if (auth?.userRole === "medical-personnel") return <Navigate to="/patients-management" />;
    }
    return <Auth />;
  };
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route
        path="/patient-profile"
        element={
          <RoleBasedRoute allowedRoles={["patient"]}>
            <MyInfo />
          </RoleBasedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
