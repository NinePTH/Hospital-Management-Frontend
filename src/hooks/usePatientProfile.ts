import { useState, useEffect } from "react";
import { fetchProfile } from "../services/auth";
import { fetchUserPatient } from "../services/patient";

interface UserProfile {
    username: string;
    patient_id: string;
    role: string;
  }
  
  interface PatientData {
    patient_id: string;
    first_name: string;
    last_name: string;
    age: number;
    gender: string;
    blood_type: string;
    email: string;
    health_insurance: boolean;
    address: string;
    phone_number: string;
    id_card_number: string;
    ongoing_treatment: string;
  }

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