import { useState } from "react";
import { addNewEmployee } from "../../services/hr";

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

export const useAddNewEmployee = () => {
    const [response, setResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleAddNewEmployee = async (newEmployee: AddEmployee) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await addNewEmployee(newEmployee);
            setResponse(result);
        } catch (err: unknown) {
            console.error(err);
            setError("Could not perform add employee appointment");
        } finally {
            setIsLoading(false);
        }
    }

    return { response, isLoading, error, handleAddNewEmployee }
}