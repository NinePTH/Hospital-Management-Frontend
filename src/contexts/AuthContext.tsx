import React, { createContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
  setAuthenticated: (auth: boolean) => void;
  setUserRole: (role: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(!!localStorage.getItem("myApp_authToken"));
  const [userRole, setUserRole] = useState<string | null>(localStorage.getItem("myApp_userRole"));

  useEffect(() => {
    // Auto logout if token expires
    const token = localStorage.getItem("myApp_authToken");
    if (!token) {
      setAuthenticated(false);
      setUserRole(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, setAuthenticated, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};
