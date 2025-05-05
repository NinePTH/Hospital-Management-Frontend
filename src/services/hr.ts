import logoutIfExpired from "../hooks/CheckToken";
import { api } from "./api";

interface SearchEmployee {
    employee_id: string;
    first_name: string;
    last_name: string;
}

interface AddEmployee {
    employee_id: string;
    first_name: string;
    last_name: string;
    position_id: string;
    phone_number: string;
    salary: number;
    email: string;
    hire_date: string;
    resignation_date: string | null;
    work_status: "yes" | "no";
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

export const addNewEmployee = async ( newEmployee: AddEmployee ) => {
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/employee/add-employee`,
        newEmployee,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}