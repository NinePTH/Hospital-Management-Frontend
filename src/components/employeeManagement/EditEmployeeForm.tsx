import { useState } from "react";
import { useEditEmployee } from "../../hooks/hr/useEditEmployee";

interface EditEmployee {
  employee_id: string;
  first_name: string;
  last_name: string;
  position_id: string;
  phone_number: string;
  salary: number;
  email: string;
  hire_date: string;
  resignation_date: string;
  work_status: "yes" | "no";
}

const EditEmployeeForm = () => {
  const { response, isLoading, handleEditEmployee } = useEditEmployee();
  console.log("Response:", response);
  const [formData, setFormData] = useState<EditEmployee>({
    employee_id: "",
    first_name: "",
    last_name: "",
    position_id: "",
    phone_number: "",
    salary: 0,
    email: "",
    hire_date: "",
    resignation_date: "",
    work_status: "yes",
  });

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      employee_id: "",
      first_name: "",
      last_name: "",
      position_id: "",
      phone_number: "",
      salary: 0,
      email: "",
      hire_date: "",
      resignation_date: "",
      work_status: "yes",
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEditEmployee(formData);
    setFormData({
      employee_id: "",
      first_name: "",
      last_name: "",
      position_id: "",
      phone_number: "",
      salary: 0,
      email: "",
      hire_date: "",
      resignation_date: "",
      work_status: "yes",
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-4 whitespace-nowrap"
    >
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Employee ID</label>
        <input
          type="text"
          value={formData.employee_id}
          onChange={(e) =>
            setFormData({ ...formData, employee_id: e.target.value })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">First Name</label>
        <input
          type="text"
          value={formData.first_name}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Last Name</label>
        <input
          type="text"
          value={formData.last_name}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Position</label>
        <select
          value={formData.position_id}
          onChange={(e) =>
            setFormData({ ...formData, position_id: e.target.value })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
          <option value="" disabled hidden>
            Select Position
          </option>
          <option value="doctor" className="py-2">
            Doctor
          </option>
          <option value="nurse" className="py-2">
            Nurse
          </option>
          <option value="HR" className="py-2">
            HR
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Salary</label>
        <input
          type="text"
          value={formData.salary == 0 ? "" : formData.salary}
          onChange={(e) =>
            setFormData({ ...formData, salary: Number(e.target.value) })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Example@gmail.com"
          pattern=".+@(gmail\.com|hotmail\.com|email\.com)"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Phone Number</label>
        <input
          type="text"
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Hire Date</label>
        <input
          type="date"
          value={formData.hire_date}
          onChange={(e) =>
            setFormData({ ...formData, hire_date: e.target.value })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Working Status</label>
        <select
          value={formData.work_status}
          onChange={(e) =>
            setFormData({
              ...formData,
              work_status: e.target.value as "yes" | "no",
            })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
          <option value="yes" className="py-2">
            Yes
          </option>
          <option value="no" className="py-2">
            No
          </option>
        </select>
      </div>
      {formData.work_status === "no" && (
        <div className="flex flex-col gap-2 col-span-2">
          <label className="text-sm lg:text-md">Resignation Date</label>
          <input
            required
            type="date"
            value={formData.resignation_date}
            onChange={(e) =>
              setFormData({ ...formData, resignation_date: e.target.value })
            }
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
          />
        </div>
      )}
      <div className="col-span-full flex flex-wrap justify-center sm:justify-normal gap-4 mt-4">
        <button
          onClick={handleClear}
          type="button"
          disabled={isLoading}
          className="px-8 py-1 bg-white text-[#2C6975] border-2 border-[#2C6975] rounded-md hover:bg-[#2C6975] hover:text-white active:scale-95 active:bg-white active:text-[#2C6975] transition duration-150 ease-in-out cursor-pointer"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-1 bg-[#2C6975] text-white border-2 border-[#2C6975] rounded-md hover:bg-white hover:text-[#2C6975] hover:border-[#2C6975] active:scale-95 active:bg-[#2C6975] active:text-white transition duration-150 ease-in-out cursor-pointer"
        >
          Done
        </button>
      </div>
    </form>
  );
};

export default EditEmployeeForm;
