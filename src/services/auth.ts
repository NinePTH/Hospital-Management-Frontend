import { api, setAuthToken } from "./api";
import { jwtDecode } from "jwt-decode";

interface RegisterResponse {
    message: string;
}

interface LoginResponse {
    token: string;
}

// Register user
export const registerUser = async (username: string, password: string) => {
    const response = await api.post<RegisterResponse>("/register", { username, password });
    return response.data;
};

// Login user
export const loginUser = async (username: string, password: string) => {
    const response = await api.post<LoginResponse>("/login", { username, password });
    const token = response.data.token;
    setAuthToken(token);
    return response.data;
  };


// Logout user
export const logoutUser = () => {
    setAuthToken(null);
  };

  // Fetch user profile
export const fetchProfile = async () => {
    if (isTokenExpired()) {
        logoutUser();
        throw new Error("Token expired");
      }
    const token = localStorage.getItem("token");
    const response = await api.get("/profile",
        { headers: {Authorization: `Bearer ${token}`} }
    );
    return response.data;
  };

  export const fetchPatient = async () => {
    if (isTokenExpired()) {
        logoutUser();
        throw new Error("Token expired");
      }
    const token = localStorage.getItem("token");
    const response = await api.get("/patient",
        { headers: {Authorization: `Bearer ${token}`} }
    );
    return response.data;
  };

  export const isTokenExpired = () => {
    const token = localStorage.getItem("token");
    if (!token) return true;
  
    const decoded: any = jwtDecode(token);
    return decoded.exp * 1000 < Date.now(); // Convert to milliseconds
  };