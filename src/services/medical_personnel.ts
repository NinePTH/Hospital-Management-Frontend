import { api } from "./api";
import isTokenExpired from "../hooks/CheckToken";
import { logoutUser } from "./auth";

export const fetchAllPatient = async () => {
    if (isTokenExpired()) {
        logoutUser();
        throw new Error("Token expired");
    }
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.get(`/patient`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
};
