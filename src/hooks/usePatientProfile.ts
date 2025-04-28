import { useState, useEffect } from "react";
import { fetchProfile } from "../services/auth";
import { fetchUserPatient } from "../services/patient";
import { UserProfile, PatientData } from "../types";

export const usePatientProfile = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [patientData, setPatientData] = useState<PatientData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProfile = async () => {
            setIsLoading(true);
            try {
                const data = await fetchProfile();
                setProfile(data);
                try {
                    const patientDataFromApi = await fetchUserPatient(data.patient_id);
                    setPatientData(patientDataFromApi);
                    // console.log("Patient Data:", patientData);
                } catch (err: unknown) {
                    const errorMessage =
                        err instanceof Error ? err.message : "Failed to fetch patient data";
                    console.error(errorMessage);
                    setError("Could not load patient information");
                }
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof Error ? err.message : "Failed to fetch profile";
                console.error(errorMessage);
                setError("Could not load profile");
            } finally {
                setIsLoading(false);
            }
        };

        getProfile();
    }, []);

    return { profile, patientData, isLoading, error };
};