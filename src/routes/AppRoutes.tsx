import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import MyInfo from "../pages/MyInfo";
import Home from "../pages/Home";
// import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/utils/RoleBasedRoute";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PatientManagement from "../pages/PatientManagement";

const AppRoutes = () => {
  const auth = useContext(AuthContext);

  const Service = () => {
    if (!auth?.isAuthenticated) {
      return <Auth />;
    }
    if (auth?.userRole === "patient") return <Navigate to="/patient-profile" />;
    else if (auth?.userRole === "HR")
      return <Navigate to="/employees-management" />;
    else if (auth?.userRole === "medical_personnel")
      return <Navigate to="/patients-management" />;
    return <Auth />;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/system" element={<Service />} />
      <Route
        path="/patient-profile"
        element={
          <RoleBasedRoute allowedRoles={["patient"]}>
            <MyInfo />
          </RoleBasedRoute>
        }
      />
      <Route
        path="/patients-management"
        element={
          <RoleBasedRoute allowedRoles={["medical_personnel"]}>
            <PatientManagement />
          </RoleBasedRoute>
        }
      />
      <Route
        path="/patients-management/add-patient"
        element={
          <RoleBasedRoute allowedRoles={["medical_personnel"]}>
            <PatientManagement />
          </RoleBasedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
