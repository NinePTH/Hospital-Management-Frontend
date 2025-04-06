import { api, setAuthToken } from "./api";
import { jwtDecode } from "jwt-decode";

export const fetchUserPatient = async (patientId: string) => {
    if (isTokenExpired()) {
        logoutUser();
        throw new Error("Token expired");
    }
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.get(`/patient/${patientId}`,
        { headers: { Authorization: `Bearer ${token}` } }
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

export const logoutUser = () => {
    setAuthToken(null);
};