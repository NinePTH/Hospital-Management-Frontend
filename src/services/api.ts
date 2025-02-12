import axios from "axios";

const API_URL = "http://localhost:1323";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

// Set token in header
export const setAuthToken = (token: string | null) => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  };