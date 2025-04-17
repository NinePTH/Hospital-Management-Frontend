import { AnimatePresence, motion } from "motion/react";
import { UserProfile, PatientData } from "../../types";

interface ProfileSectionProps {
  profile: UserProfile | null;
  patientData?: PatientData | null;
}

const ProfileSection = ({ profile, patientData }: ProfileSectionProps) => {

  const patientInfo = [
    { label: "Patient ID", value: profile?.patient_id },
    { label: "First Name", value: patientData?.first_name },
    { label: "Last Name", value: patientData?.last_name },
    // { label: "Username", value: profile?.username },
    { label: "Age", value: patientData?.age },
    { label: "Gender", value: patientData?.gender },
    { label: "Date of Birth", value: patientData?.date_of_birth },
    { label: "Blood Type", value: patientData?.blood_type },
    // { label: "Email", value: patientData?.email },
    { label: "Health Insurance", value: patientData?.health_insurance ? "Yes" : "No" },
    { label: "Address", value: patientData?.address },
    { label: "Phone number", value: patientData?.phone_number },
    { label: "ID card number", value: patientData?.id_card_number },
    { label: "Ongoing treatment", value: patientData?.ongoing_treatment },
  ];
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className=" flex flex-col items-center justify-center shadow-soft rounded-md w-fit h-fit py-10 px-8 md:p-10 lg:p-12 bg-white"
      >
        <h1 className="text-3xl md:text-4xl font-playfair">MyInfo</h1>
        <h1 className="text-xl md:text-2xl font-quicksand mb-5 lg:mb-4">Siam Hospital</h1>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
          <div className="text-left w-full">
            {patientData && patientInfo.map(({ label, value }) => (
              <div key={label} className="flex justify-between lg:block">
              <span>{label}:</span>
              <span className="text-right">{" "}{value || "-"}</span>
            </div>
            ))}
            <p className="mt-3">
              Contact the{" "}
              <u className="text-[#2C6975] cursor-pointer">Help Desk</u> if
              needed
            </p>
          </div>
          <div className="border-y h-1/2 w-full lg:w-0 lg:border-r-0 lg:border-l lg:h-[388px] lg:mt-1 border-[#ACACAC]"></div>
          {/* ใส่ lg:h-full ไม่ได้ไม่รู้เป็นไร */}
          <div className="text-left w-full">
            <p>Joe Mama</p>
            <p>I'm to lazy too complete this</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileSection;
