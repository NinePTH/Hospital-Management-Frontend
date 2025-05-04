import { useState } from "react";
import { addPatientHistory } from "../../services/medical_personnel";

interface AddPatientHistoryInfo {
    patient_id: string;
    time: string;
    date: string;
    detail: string;
}

export const useAddPatientHistory = () => {
    const [response, setResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleAddPatientHistory = async (patientHistory: AddPatientHistoryInfo) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await addPatientHistory(patientHistory);
            setResponse(result);
        } catch (err: unknown) {
            console.error(err);
            setError("Could not perform add patient history");
        } finally {
            setIsLoading(false);
        }
    }

    return { response, isLoading, error, handleAddPatientHistory }
}