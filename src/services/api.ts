import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const api = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

// Set token in header
export const setAuthToken = async(token: string | null) => {
    if (token) {
      localStorage.setItem("myApp_authToken", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      localStorage.removeItem("myApp_authToken");
      localStorage.removeItem("myApp_userRole");
      delete api.defaults.headers.common["Authorization"];
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('Logout Successfully');
    }
  };