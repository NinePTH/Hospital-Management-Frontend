import { useState, useEffect } from "react";
import { PatientData } from "../../types";
import { fetchAllPatient } from "../../services/medical_personnel";

export const useGetAllPatient = () => {
    const [patientsData, setPatientData] = useState<PatientData[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAllPatients = async () => {
            setIsLoading(true);
            try {
                const patientDataFromApi = await fetchAllPatient();
                setPatientData(patientDataFromApi);
                // console.log("Patient Data:", patientData);
            } catch (err: unknown) {
                console.error(err);
                setError("Could not load patient information");
            } finally {
                setIsLoading(false);
            }
        };

        getAllPatients();
    }, []);

    return { patientsData, isLoading, error };
};