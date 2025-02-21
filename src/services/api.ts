import axios from "axios";

const API_URL = "https://go-mvc-s.onrender.com";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

// Set token in header
export const setAuthToken = (token: string | null) => {
    if (token) {
      localStorage.setItem("myApp_authToken", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      localStorage.removeItem("myApp_authToken");
      delete api.defaults.headers.common["Authorization"];
    }
  };