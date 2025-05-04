import { api } from "./api";
import isTokenExpired from "../hooks/CheckToken";
import { logoutUser } from "./auth";

interface searchPatient {
    patient_id: string;
    first_name: string;
    last_name: string;
}

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

export const searchPatient = async ( searchTerm: searchPatient ) => {
    if (isTokenExpired()) {
        logoutUser();
        throw new Error("Token expired");
    }
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/patient/search-patient`,
        searchTerm,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}