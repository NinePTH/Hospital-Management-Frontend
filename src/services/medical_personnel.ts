import { api } from "./api";
import logoutIfExpired from "../hooks/CheckToken";

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

interface AddEditNewPatient {
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
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.get(`/patient`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
};

export const searchPatient = async ( searchTerm: SearchPatient ) => {
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/patient/search-patient`,
        searchTerm,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}

export const addPatientHistory = async ( addPatientHistory: AddPatientHistory ) => {
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/patient/add-patient-history`,
        addPatientHistory,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}

export const addPatientAppointment = async ( addPatientAppointment: AddPatientAppointment ) => {
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/patient/add-patient-appointment`,
        addPatientAppointment,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}

export const addNewPatient = async ( newPatient: AddEditNewPatient ) => {
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.post(`/patient/add-patient`,
        newPatient,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}

export const editPatient = async ( editPatient: AddEditNewPatient ) => {
    logoutIfExpired()
    const token = localStorage.getItem("myApp_authToken");
    const response = await api.put(`/patient/update-patient`,
        editPatient,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
}