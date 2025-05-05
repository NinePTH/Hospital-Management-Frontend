import { useState } from "react";
import { addPatientAppointment } from "../../services/medical_personnel";

interface AddPatientAppointmentInfo {
    patient_id: string;
    time: string;
    date: string;
    topic: string;
}

export const useAddPatientAppointment = () => {
    const [response, setResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleAddPatientAppointment = async (patientAppointment: AddPatientAppointmentInfo) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await addPatientAppointment(patientAppointment);
            setResponse(result);
        } catch (err: unknown) {
            console.error(err);
            setError("Could not perform add patient appointment");
        } finally {
            setIsLoading(false);
        }
    }

    return { response, isLoading, error, handleAddPatientAppointment }
}