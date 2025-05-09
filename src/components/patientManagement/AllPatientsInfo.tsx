import { PatientData } from "../../types";

interface ProfileSectionProps {
  patientData?: PatientData[] | null;
}

const PatientInfoSection = ({ patientData }: ProfileSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 w-full">
        {patientData?.length ? (
          patientData.map((patient, index) => {
            const patientInfo = [
              { label: "Patient ID", value: patient.patient.patient_id },
              { label: "First Name", value: patient.patient.first_name },
              { label: "Last Name", value: patient.patient.last_name },
              { label: "Age", value: patient.patient.age },
              { label: "Gender", value: patient.patient.gender },
              { label: "Date of Birth", value: patient.patient.date_of_birth },
              { label: "Blood Type", value: patient.patient.blood_type },
              {
                label: "Health Insurance",
                value: patient.patient.health_insurance,
              },
              {
                label: "ID card number",
                value: patient.patient.id_card_number,
              },
              {
                label: "Ongoing treatment",
                value: patient.patient.ongoing_treatment,
              },
            ];

            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-9 place-items-start gap-5 lg:gap-0"
              >
                <div className="text-left col-span-1 lg:col-span-4 w-full">
                  {patientInfo.map(({ label, value }) => (
                    <div key={label} className="flex justify-between md:block">
                      <span>{label}:</span>
                      <span className="text-right"> {value || "-"}</span>
                    </div>
                  ))}
                </div>
                <div className="place-self-center border-y h-1/2 w-full lg:w-0 lg:border-r-0 lg:border-l lg:h-full lg:mt-1 border-[#ACACAC]"></div>
                {/* ใส่ lg:h-full ไม่ได้ไม่รู้เป็นไร */}
                {patient.medical_history &&
                patient.medical_history.length > 0 ? (
                  <div className="space-y-3 w-full col-span-1 lg:col-span-4">
                    {patient.medical_history.map((record, index) => (
                      <div
                        key={index}
                        className="pb-4 lg:pb-0 text-base"
                      >
                        <div className="flex justify-between">
                          <span>Date & Time:</span>
                          <span className="text-right">
                            {record.date} {record.time}
                          </span>
                        </div>
                        <p className="mt-1">Details:</p>
                        {record.details}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="space-y-3 pb-4 lg:pb-0 w-full col-span-1 lg:col-span-4 text-center">No medical history available</p>
                )}
              </div>
            );
          })
        ) : (
          <p className="col-span-2 text-[#2C6975] text-xl sm:text-2xl text-center">
            No patient data available.
          </p>
        )}
      </div>
    </>
  );
};

export default PatientInfoSection;
