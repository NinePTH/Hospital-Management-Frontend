import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(() => 
        !!localStorage.getItem("myApp_authToken")
      );
      const [userRole, setUserRole] = useState<string | null>(() => 
        localStorage.getItem("myApp_userRole")
      );


    
  useEffect(() => {
    const handleStorageChange = () => {
        const token = localStorage.getItem("myApp_authToken");
        const role = localStorage.getItem("myApp_userRole");

        setAuthenticated(!!token);
        setUserRole(role);
    }

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, setAuthenticated, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};
