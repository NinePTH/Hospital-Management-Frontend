import { useEffect, useState } from "react";
import { fetchProfile } from "../services/auth";
import { fetchUserPatient } from "../services/patient";
import Navbar from "../components/Navbar";

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

const MyInfo = () => {
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

  if (isLoading) {
    <div className="min-h-dvh flex flex-col items-center justify-center pt-[22.5%] pb-[7.5%] md:pt-[12.5%] md:pb-[5%] lg:pt-[9.5%] lg:pb-[4%]  bg-[url(/background.webp)] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-start justify-center border border-[#ACACAC] rounded-md w-fit h-fit p-10 md:p-10 lg:p-12 bg-white">
          <p>Loading profile...</p>
      </div>
    </div>;
  }

  if (error) {
    <div className="min-h-dvh flex flex-col items-center justify-center pt-[22.5%] pb-[7.5%] md:pt-[12.5%] md:pb-[5%] lg:pt-[9.5%] lg:pb-[4%]  bg-[url(/background.webp)] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-start justify-center border border-[#ACACAC] rounded-md w-fit h-fit p-10 md:p-10 lg:p-12 bg-white">
          <p>Error: {error}</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center pt-[22.5%] pb-[7.5%] md:pt-[12.5%] md:pb-[5%] lg:pt-[9.5%] lg:pb-[4%]  bg-[url(/background.webp)] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 border border-[#ACACAC] rounded-md w-fit h-fit p-10 md:p-10 lg:p-12 bg-white">
        <div className="text-left w-full">
          <p>Username: {profile?.username}</p>
          <p>Patient ID: {profile?.patient_id}</p>
          <p>Role: {profile?.role}</p>
          {patientData && (
            <>
              {/* <h3>Patient Information</h3> */}
              <p>First Name: {patientData.first_name}</p>
              <p>Last Name: {patientData.last_name}</p>
              <p>Age: {patientData.age}</p>
              <p>Gender: {patientData.gender}</p>
              <p>Blood Type: {patientData.blood_type}</p>
              <p>Email: {patientData.email}</p>
              <p>
                Health Insurance: {patientData.health_insurance ? "Yes" : "No"}
              </p>
              <p>Address: {patientData.address}</p>
              <p>Phone number: {patientData.phone_number}</p>
              <p>ID card number: {patientData.id_card_number}</p>
              <p>Ongoing treatment: {patientData.ongoing_treatment}</p>
            </>
          )}
          <p className="mt-3">
            Contact the{" "}
            <u className="text-[#2C6975] cursor-pointer">Help Desk</u> if needed
          </p>
        </div>
        <div className="border-y h-1/2 w-full lg:w-0 lg:border-r-0 lg:border-l lg:h-[388px] lg:mt-1 border-[#ACACAC]"></div>{" "}
        {/* ใส่ lg:h-full ไม่ได้ไม่รู้เป็นไร */}
        <div className="text-left w-full">
          <p>Joe Mama</p>
          <p>I'm to lazy too complete this</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
