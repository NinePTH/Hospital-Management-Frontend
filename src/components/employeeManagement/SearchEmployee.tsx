import { useGetAllEmployee } from "../../hooks/hr/useGetAllEmployee";
import { useSearchEmployee } from "../../hooks/hr/useSearchEmployee";
import EmployeeInfoSection from "./EmployeesInfoSection";
import SearchEmployeeForm from "./SearchEmployeeForm";

const SearchEmployee = () => {
  const { employeesData } = useGetAllEmployee();
    const { results, isLoading, handleSearch, error } = useSearchEmployee();
    console.log("Patient Data:", employeesData);
    console.log("Error:", error);
    console.log("Results:", results);
  
    const displayData = results && results.length > 0 ? results : employeesData;
  return (
    <>
      <div className="bg-white shadow-soft min-h-[10dvh] h-fit flex flex-col items-center justify-start gap-8 py-14 px-14 rounded-lg">
        <header className="text-center">
          <h1 className="font-playfair text-4xl pb-2">Employee Information</h1>
          <h2 className="text-xl">Siam Hospital</h2>
        </header>
        <SearchEmployeeForm isLoading={isLoading} handleSearch={handleSearch} />
      </div>
      
      <div className="bg-white shadow-soft min-h-[10dvh] h-fit flex flex-col items-center justify-start gap-8 py-14 px-14 mt-4 rounded-lg">
        <EmployeeInfoSection employeeData={displayData} error={error} />
      </div>
    </>
  );
};

export default SearchEmployee;
