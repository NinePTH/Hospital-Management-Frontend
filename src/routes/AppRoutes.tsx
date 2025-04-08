import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import MyInfo from "../pages/MyInfo";
// import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
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
