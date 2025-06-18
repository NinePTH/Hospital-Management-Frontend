import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Auth from "../pages/Auth";
import MyInfo from "../pages/MyInfo";
import Home from "../pages/Home";
// import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/utils/RoleBasedRoute";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PatientManagement from "../pages/PatientManagement";
import EmployeeManagement from "../pages/EmployeeManagement";

const AppRoutes = () => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  const Service = () => {
    if (!auth?.isAuthenticated) {
      return <Auth />;
    }
    if (auth?.userRole === "patient") return <Navigate to="/patient-profile" />;
    else if (auth?.userRole === "HR")
      return <Navigate to="/employees-management/add-employee" />;
    else if (auth?.userRole === "medical_personnel")
      return <Navigate to="/patients-management/add-patient" />;
    return <Auth />;
  };
  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
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
        <Route
          path="/patients-management/edit-patient"
          element={
            <RoleBasedRoute allowedRoles={["medical_personnel"]}>
              <PatientManagement />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/patients-management/add-patient-appointment"
          element={
            <RoleBasedRoute allowedRoles={["medical_personnel"]}>
              <PatientManagement />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/patients-management/add-patient-medical-history"
          element={
            <RoleBasedRoute allowedRoles={["medical_personnel"]}>
              <PatientManagement />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/patients-management/search-patient"
          element={
            <RoleBasedRoute allowedRoles={["medical_personnel"]}>
              <PatientManagement />
            </RoleBasedRoute>
          }
        />

        <Route
          path="/employees-management"
          element={
            <RoleBasedRoute allowedRoles={["HR"]}>
              <EmployeeManagement />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/employees-management/add-employee"
          element={
            <RoleBasedRoute allowedRoles={["HR"]}>
              <EmployeeManagement />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/employees-management/edit-employee"
          element={
            <RoleBasedRoute allowedRoles={["HR"]}>
              <EmployeeManagement />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/employees-management/search-employee"
          element={
            <RoleBasedRoute allowedRoles={["HR"]}>
              <EmployeeManagement />
            </RoleBasedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
