import { useState } from "react";
import { editPatient } from "../../services/medical_personnel";

interface PatientData {
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

export const useEditPatient = () => {
    const [response, setResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleEditPatient = async (newPatient: PatientData) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await editPatient(newPatient);
            setResponse(result);
        } catch (err: unknown) {
            console.error(err);
            setError("Could not perform edit patient appointment");
        } finally {
            setIsLoading(false);
        }
    }

    return { response, isLoading, error, handleEditPatient }
}