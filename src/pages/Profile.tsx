import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile, logoutUser } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";
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

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProfile();
        setProfile(data);

        // Only fetch patient data if patient_id exists
        if (data.patient_id) {
          try {
            const patientDataFromApi = await fetchUserPatient(data.patient_id);
            console.log(patientDataFromApi);
            setPatientData(patientDataFromApi);
          } catch (err: unknown) {
            const errorMessage =
              err instanceof Error
                ? err.message
                : "Failed to fetch patient data";
            console.error(errorMessage);
            setError("Could not load patient information");
          }
        }
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch profile";
        console.error(errorMessage);
        setError("Could not load profile");
        setProfile({
          username: "unknown",
          patient_id: "unknown",
          role: "unknown",
        });
      } finally {
        setIsLoading(false);
      }
    };

    getProfile();
  }, []);

  // If you want to see the updated patientData, use useEffect with patientData dependency
useEffect(() => {
  if (patientData) {
    console.log("This patient data:", patientData);
    // Now you can see the actual updated patientData
  }
}, [patientData]);

  const handleLogout = () => {
    logoutUser();
    auth?.setAuthenticated(false);
    navigate("/");
  };

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>
        <strong>Username:</strong> {profile?.username}
      </p>
      <p>
        <strong>Patient ID:</strong> {profile?.patient_id}
      </p>
      <p>
        <strong>Role:</strong> {profile?.role}
      </p>
      {patientData && (
        <div className="patient-details">
          <h3>Patient Information</h3>
          <p>
            <strong>Patient Name:</strong> {patientData.first_name}{" "}{patientData.last_name}
          </p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
