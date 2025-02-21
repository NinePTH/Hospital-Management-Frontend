import React, { createContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: (auth: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    // Auto logout if token expires
    const token = localStorage.getItem("token");
    if (!token) setAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
