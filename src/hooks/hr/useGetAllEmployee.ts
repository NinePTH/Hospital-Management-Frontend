import { useState, useEffect } from "react";
import { EmployeeData } from "../../types";
import { fetchAllEmployee } from "../../services/hr";

export const useGetAllEmployee = () => {
    const [employeesData, setEmployeeData] = useState<EmployeeData[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAllPatients = async () => {
            setIsLoading(true);
            try {
                const patientDataFromApi = await fetchAllEmployee();
                setEmployeeData(patientDataFromApi);
                // console.log("Patient Data:", patientData);
            } catch (err: unknown) {
                console.error(err);
                setError("Could not load employee information");
            } finally {
                setIsLoading(false);
            }
        };

        getAllPatients();
    }, []);

    return { employeesData, isLoading, error };
};