import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
  setAuthenticated: (auth: boolean) => void;
  setUserRole: (role: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
