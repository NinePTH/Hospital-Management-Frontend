import { useState } from "react";
import { editEmployee } from "../../services/hr";

interface EditEmployee {
    employee_id: string;
    first_name: string;
    last_name: string;
    position_id: string;
    phone_number: string;
    salary: number;
    email: string;
    hire_date: string;
    resignation_date: string;
    work_status: "yes" | "no";
  }

export const useEditEmployee = () => {
    const [response, setResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleEditEmployee = async (editEmployeeData: EditEmployee) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await editEmployee(editEmployeeData);
            setResponse(result);
        } catch (err: unknown) {
            console.error(err);
            setError("Could not perform edit employee appointment");
        } finally {
            setIsLoading(false);
        }
    }

    return { response, isLoading, error, handleEditEmployee }
}