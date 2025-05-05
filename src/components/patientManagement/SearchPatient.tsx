import { useGetAllPatient } from "../../hooks/medical_personnel/useGetAllPatient";
import { useSearchPatient } from "../../hooks/medical_personnel/useSearchPatient";
import PatientInfoSection from "./PatientsInfoSection";
import SearchPatientForm from "./SearchPatientForm";

const SearchPatient = () => {
  const { patientsData } = useGetAllPatient();
  const { results, isLoading, handleSearch, error } = useSearchPatient();
  // console.log("Patient Data:", patientsData);
  // console.log("Error:", error);
  // console.log("Results:", results);

  const displayData = results && results.length > 0 ? results : patientsData;

  return (
    <>
      <div className="bg-white shadow-soft min-h-[10dvh] h-fit flex flex-col items-center justify-start gap-8 py-14 px-14 rounded-lg">
        <header className="text-center">
          <h1 className="font-playfair text-4xl pb-2">Patient Information</h1>
          <h2 className="text-xl">Siam Hospital</h2>
        </header>
        <SearchPatientForm isLoading={isLoading} handleSearch={handleSearch} />
      </div>
      
      <div className="bg-white shadow-soft min-h-[10dvh] h-fit flex flex-col items-center justify-start gap-8 py-14 px-14 mt-4 rounded-lg">
        {/* <h1 className="text-4xl text-[#2C6975]">No result</h1> */}
        <PatientInfoSection patientData={displayData} error={error} />
      </div>
    </>
  );
};

export default SearchPatient;
