import { api } from "./api";
import isTokenExpired from "../hooks/CheckToken";
import { logoutUser } from "./auth";

interface SearchPatient {
    patient_id: string;
    first_name: string;
    last_name: string;
}

interface AddPatientHistory {
    patient_id: string;
    time: string;
    date: string;
    detail: string;
}

interface AddPatientAppointment {
    patient_id: string;
    time: string;
    date: string;
    topic: string;
}

interface AddNewPatient {
    patient: {
        patient_id: string;
        first_name: string;
        last_name: string;
        age: number;
        date_of_birth: string;
        gender: string;
        blood_type: string;
        email: string;
        health_insurance: string;
        address: string;
        phone_number: string;
        id_card_number: string;
        ongoing_treatment: string;
        unhealthy_habits: string;
    };
    patient_chronic_disease: {
        disease_id: string;
    }[];
    patient_drug_allergy: {
        drug_id: string;
    }[];
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

export const searchPatient = async ( searchTerm: SearchPatient ) => {
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

export const addPatientHistory = async ( addPatientHistory: AddPatientHistory ) => {
    if (isTokenExpired()) {
        logoutUser();
        throw new Error("Token expired");
    }
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/patient/add-patient-history`,
        addPatientHistory,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}

export const addPatientAppointment = async ( addPatientAppointment: AddPatientAppointment ) => {
    if (isTokenExpired()) {
        logoutUser();
        throw new Error("Token expired");
    }
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/patient/add-patient-appointment`,
        addPatientAppointment,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}

export const addNewPatient = async ( newPatient: AddNewPatient ) => {
    if (isTokenExpired()) {
        logoutUser();
        throw new Error("Token expired");
    }
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/patient/add-patient`,
        newPatient,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}