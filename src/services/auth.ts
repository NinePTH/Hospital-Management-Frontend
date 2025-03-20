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
    setAuthToken(token); // Store token

    // Decode token to get user role
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwtDecode(token);
    localStorage.setItem("myApp_userRole", decoded.role);
    console.log("Your Role is:",decoded.role);

    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for token to be set
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
    const token = localStorage.getItem("myApp_authToken");
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
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.get("/patient",
        { headers: {Authorization: `Bearer ${token}`} }
    );
    return response.data;
  };

  export const isTokenExpired = () => {
    const token = localStorage.getItem("myApp_authToken");
    if (!token) return true;
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwtDecode(token);
    console.log("Token Expiry:", decoded.exp, "Current Time:", Date.now() / 1000);
  
  return decoded.exp < Date.now() / 1000; // Convert to seconds
  };