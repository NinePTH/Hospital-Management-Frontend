import { AnimatePresence, motion } from "motion/react";
import { UserProfile, PatientData } from "../../types";

interface ProfileSectionProps {
  profile: UserProfile | null;
  patientData?: PatientData | null;
}

const ProfileSection = ({ profile, patientData }: ProfileSectionProps) => {

  const patientInfo = [
    { label: "Patient ID", value: profile?.patient_id },
    { label: "First Name", value: patientData?.patient.first_name },
    { label: "Last Name", value: patientData?.patient.last_name },
    // { label: "Username", value: profile?.username },
    { label: "Age", value: patientData?.patient.age },
    { label: "Gender", value: patientData?.patient.gender },
    { label: "Date of Birth", value: patientData?.patient.date_of_birth },
    { label: "Blood Type", value: patientData?.patient.blood_type },
    // { label: "Email", value: patientData?.patient.email },
    { label: "Health Insurance", value: patientData?.patient.health_insurance ? "Yes" : "No" },
    { label: "Address", value: patientData?.patient.address },
    { label: "Phone number", value: patientData?.patient.phone_number },
    { label: "ID card number", value: patientData?.patient.id_card_number },
    { label: "Ongoing treatment", value: patientData?.patient.ongoing_treatment },
  ];
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className=" flex flex-col items-center justify-center shadow-soft rounded-md w-fit h-fit py-10 px-8 md:p-10 lg:p-12 bg-white"
      >
        <h1 className="text-3xl md:text-4xl font-playfair">MyInfo</h1>
        <h1 className="text-xl md:text-2xl font-quicksand mb-5 lg:mb-6">Siam Hospital</h1>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
          <div className="text-left w-full lg:w-3/4">
            {patientData && patientInfo.map(({ label, value }) => (
              <div key={label} className="flex justify-between lg:block">
              <span>{label}:</span>
              <span className="text-right">{" "}{value || "-"}</span>
            </div>
            ))}
            <p className="mt-3 text-xs">
              Contact the{" "}
              <u className="text-[#2C6975] cursor-pointer">Help Desk</u> if
              needed
            </p>
          </div>
          <div className="border-y h-1/2 w-full lg:w-0 lg:border-r-0 lg:border-l lg:h-[388px] lg:mt-1 border-[#ACACAC]"></div>
          {/* ใส่ lg:h-full ไม่ได้ไม่รู้เป็นไร */}
          {patientData?.medical_history && patientData.medical_history.length > 0 ? (
              <div className="space-y-3 w-full">
                {patientData.medical_history.map((record, index) => (
                  <div key={index} className="border-b pb-2 last:border-b-0 text-sm">
                    <div className="flex justify-between">
                      <span>Date & Time:</span>
                      <span>{record.date} {record.time}</span>
                    </div>
                    <p className="mt-1">Details:</p>
                    {record.details}
                  </div>
                ))}
              </div>
            ) : (
              <p>No medical history available</p>
            )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileSection;
