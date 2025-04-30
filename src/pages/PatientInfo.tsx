import { useState } from "react";

const PatientInfo = () => {
    const [patientID, setPatientID] = useState(""); //ID
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleClear = (e: React.FormEvent) => {
        e.preventDefault();
        setPatientID("");
        setFirstName("");
        setLastName("");
      };

  return (
    <form className="w-full grid grid-cols-4 grid-rows-9 gap-4">
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md">Patient ID</label>
        <input
          type="text"
            value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md">First Name</label>
        <input
          type="text"
            value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md">Last Name</label>
        <input
          type="text"
            value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>


      <div className="col-span-2 flex gap-4 w-1/2 mt-4">
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
        Add
      </button>
      </div>
    </form>
  );
};

export default PatientInfo;
