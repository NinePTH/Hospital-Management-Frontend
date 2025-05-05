import { useState } from "react";
import { PatientData } from "../../types";
import { searchPatient } from "../../services/medical_personnel";

interface SearchTerm {
    patient_id: string;
    first_name: string;
    last_name: string;
}

export const useSearchPatient = () => {
    const [results, setResults] = useState<PatientData[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (searchTerm: SearchTerm) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await searchPatient(searchTerm);
            setResults(result);
        } catch (err: unknown) {
            console.error(err);
            setError("Could not perform search");
        } finally {
            setIsLoading(false);
        }
    }

    return { results, isLoading, error, handleSearch };
};