import { searchEmployee } from './../../services/hr';
import { useState } from "react";
import { EmployeeData } from "../../types";

interface SearchTerm {
    employee_id: string;
    first_name: string;
    last_name: string;
}

export const useSearchEmployee = () => {
    const [results, setResults] = useState<EmployeeData[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (searchTerm: SearchTerm) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await searchEmployee(searchTerm);
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