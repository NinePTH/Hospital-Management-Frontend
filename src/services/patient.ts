import { api } from "./api";
import logoutIfExpired from "../hooks/CheckToken";

export const fetchUserPatient = async (patientId: string) => {
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.get(`/patient/${patientId}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
};
