import { AnimatePresence, motion } from "motion/react";
import { UserProfile, PatientData } from "../../types";

interface ProfileSectionProps {
  profile: UserProfile | null;
  patientData?: PatientData | null;
}

const ProfileSection = ({ profile, patientData }: ProfileSectionProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col lg:flex-row items-start justify-center gap-10 shadow-soft rounded-md w-fit h-fit p-10 md:p-10 lg:p-12 bg-white"
      >
        <div className="text-left w-full">
          {patientData && (
            <>
              <p>Patient ID: {profile?.patient_id}</p>
              <p>First Name: {patientData.first_name}</p>
              <p>Last Name: {patientData.last_name}</p>
              <p>Username: {profile?.username}</p>
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
        <div className="border-y h-1/2 w-full lg:w-0 lg:border-r-0 lg:border-l lg:h-[388px] lg:mt-1 border-[#ACACAC]"></div>
        {/* ใส่ lg:h-full ไม่ได้ไม่รู้เป็นไร */}
        <div className="text-left w-full">
          <p>Joe Mama</p>
          <p>I'm to lazy too complete this</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileSection;
