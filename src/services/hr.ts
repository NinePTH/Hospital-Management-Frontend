import logoutIfExpired from "../hooks/CheckToken";
import { api } from "./api";

interface SearchEmployee {
    employee_id: string;
    first_name: string;
    last_name: string;
}

export const fetchAllEmployee = async () => {
    logoutIfExpired();
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.get(`/employee`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
};

export const searchEmployee = async ( searchTerm: SearchEmployee ) => {
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/employee/search-employee`,
        searchTerm,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}