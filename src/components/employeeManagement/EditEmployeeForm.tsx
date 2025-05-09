import { useState } from "react";

const AddEmployeeForm = () => {
    const [employeeID, setEmployeeID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [hireDate, setHireDate] = useState("");
    const [resignationDate, setResignationDate] = useState("");
    const [workingStatus, setWorkingStatus] = useState("yes");

    const handleClear = (e: React.FormEvent) => {
        e.preventDefault();
        setEmployeeID("");
        setFirstName("");
        setLastName("");
        setPosition("");
        setSalary("");
        setEmail("");
        setPhoneNumber("");
        setHireDate("");
        setResignationDate("");
        setWorkingStatus("");
      };

  return (
    <form className="w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-4 whitespace-nowrap">
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">First Name</label>
        <input
          type="text"
            value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Last Name</label>
        <input
          type="text"
            value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Employee ID</label>
        <input
          type="text"
            value={employeeID}
          onChange={(e) => setEmployeeID(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Position</label>
        <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
            <option value="" disabled hidden>
            Select Position
            </option>
            <option value="doctor" className="py-2">Doctor</option>
            <option value="nurse" className="py-2">Nurse</option>
            <option value="HR" className="py-2">HR</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Salary</label>
        <input
          type="text"
            value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Email</label>
        <input
          type="email"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Phone Number</label>
        <input
          type="text"
            value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Hire Date</label>
        <input
          type="date"
            value={hireDate}
          onChange={(e) => setHireDate(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Working Status</label>
        <select
            value={workingStatus}
            onChange={(e) => setWorkingStatus(e.target.value)}
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
            <option value="yes" className="py-2">Yes</option>
            <option value="no" className="py-2">No</option>
        </select>
      </div>
      {workingStatus === "no" && (
          <div className="flex flex-col gap-2 col-span-2">
          <label className="text-sm lg:text-md">Resignation Date</label>
          <input
            type="date"
              value={resignationDate}
            onChange={(e) => setResignationDate(e.target.value)}
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
          />
        </div>
      )}
      <div className="col-span-full flex flex-wrap justify-center sm:justify-normal gap-4 mt-4">
      <button
        onClick={handleClear}
        type="button"
        className="px-8 py-1 bg-white text-[#2C6975] border-2 border-[#2C6975] rounded-md hover:bg-[#2C6975] hover:text-white active:scale-95 active:bg-white active:text-[#2C6975] transition duration-150 ease-in-out"
      >
        Reset
      </button>
      <button
        onClick={handleClear}
        type="button"
        className="px-8 py-1 bg-[#2C6975] text-white border-2 border-[#2C6975] rounded-md hover:bg-white hover:text-[#2C6975] hover:border-[#2C6975] active:scale-95 active:bg-[#2C6975] active:text-white transition duration-150 ease-in-out"
      >
        Done
      </button>
      </div>
    </form>
  );
};

export default AddEmployeeForm;
