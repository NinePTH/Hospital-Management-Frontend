import { useState } from "react";

interface SearchEmployeeFormProps {
  isLoading: boolean;
  handleSearch: (formData: {
    employee_id: string;
    first_name: string;
    last_name: string;
  }) => void;
}

const SearchEmployeeForm = ({isLoading, handleSearch}: SearchEmployeeFormProps) => {
  const [formData, setFormData] = useState({
    employee_id: "",
    first_name: "",
    last_name: "",
  });

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      employee_id: "",
      first_name: "",
      last_name: "",
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(formData);
    setFormData({
      employee_id: "",
      first_name: "",
      last_name: "",
    });
  };

  return (
    <form className="w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4">
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md">Employee ID</label>
        <input
          type="text"
          value={formData.employee_id}
          onChange={(e) =>
            setFormData({ ...formData, employee_id: e.target.value })
          }
          placeholder="EXXX"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md">First Name</label>
        <input
          type="text"
          value={formData.first_name}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          placeholder="John"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md">Last Name</label>
        <input
          type="text"
          value={formData.last_name}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
          placeholder="Doe"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>

      <div className="col-span-full flex items-center justify-center lg:justify-start gap-4 mt-4 lg:mt-0">
        <button
          onClick={handleClear}
          type="button"
          disabled={isLoading}
          className="px-8 py-1 bg-white text-[#2C6975] border-2 border-[#2C6975] rounded-md hover:bg-[#2C6975] hover:text-white active:scale-95 active:bg-white active:text-[#2C6975] transition duration-150 ease-in-out cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={onSubmit}
          type="button"
          disabled={isLoading}
          className="px-8 py-1 bg-[#2C6975] text-white border-2 border-[#2C6975] rounded-md hover:bg-white hover:text-[#2C6975] hover:border-[#2C6975] active:scale-95 active:bg-[#2C6975] active:text-white transition duration-150 ease-in-out cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchEmployeeForm;
