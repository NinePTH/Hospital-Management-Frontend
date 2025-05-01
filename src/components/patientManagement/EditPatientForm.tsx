import { useState } from "react";

const EditPatientForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(1);
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("male");
    const [bloodType, setBloodType] = useState("A");
    const [email, setEmail] = useState("");
    const [healthInsurance, setHealthInsurance] = useState(false);
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [idCardNumber, setIdCardNumber] = useState("");
    const [ongoingTreatment, setOngoingTreatment] = useState("");
    const [unhealthyHabits, setUnhealthyHabits] = useState("");
    const [numDiseases, setNumDiseases] = useState(0);
    const [diseaseIds, setDiseaseIds] = useState<string[]>([]);
    const [numDrugAllergies, setNumDrugAllergies] = useState(0);
    const [drugIds, setDrugIds] = useState<string[]>([]);

    const handleNumDiseaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value) || 0;
    setNumDiseases(count);
    // Adjust the size of the diseaseIds array
    setDiseaseIds((prev) => {
      const newIds = [...prev];
      newIds.length = count;
      return newIds.fill("", newIds.length, count); // fill new empty slots
    });
};

    const handleNumDrugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value) || 0;
    setNumDrugAllergies(count);
    // Adjust the size of the diseaseIds array
    setDrugIds((prev) => {
      const newIds = [...prev];
      newIds.length = count;
      return newIds.fill("", newIds.length, count); // fill new empty slots
    });
};

    const handleDiseaseIdChange = (index: number, value: string) => {
    setDiseaseIds((prev) => {
      const newIds = [...prev];
      newIds[index] = value;
      return newIds;
    });
    };

    const handleDrugChange = (index: number, value: string) => {
        setDrugIds((prev) => {
      const newIds = [...prev];
      newIds[index] = value;
      return newIds;
    });
    };

    const handleClear = (e: React.FormEvent) => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setAge(1);
        setDob("");
        setGender("male");
        setBloodType("A");
        setEmail("");
        setHealthInsurance(false);
        setAddress("");
        setPhoneNumber("");
        setIdCardNumber("");
        setOngoingTreatment("");
        setUnhealthyHabits("");
        setNumDiseases(0);
        setDiseaseIds([]);
        setNumDrugAllergies(0);
        setDrugIds([]);
      };

  return (
    <form className="w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-8 gap-4 whitespace-nowrap">
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
        <label className="text-sm lg:text-md">Age</label>
        <input
          type="number"
          min={1}
          max={120}
            value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Date of Birth</label>
        <input
          type="date"
            value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Gender</label>
        <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
            <option value="male" className="py-2">Male</option>
            <option value="female" className="py-2">Female</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Blood type</label>
        <select
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
            <option value="A" className="py-2">A</option>
            <option value="B" className="py-2">B</option>
            <option value="AB" className="py-2">AB</option>
            <option value="O" className="py-2">O</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Email</label>
        <input
          type="text"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Health Insurance</label>
        <select
            value={healthInsurance ? 'yes' : 'no'}
            onChange={(e) => {setHealthInsurance(e.target.value === 'yes')}}
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
            <option value="yes" className="py-2">Yes</option>
            <option value="no" className="py-2">No</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2 lg:col-span-4 row-span-2">
        <label className="text-sm lg:text-md">Address</label>
        <textarea
          // type="text"
            value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full resize-none"
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
        <label className="text-sm lg:text-md">ID Card Number</label>
        <input
          type="text"
            value={idCardNumber}
          onChange={(e) => setIdCardNumber(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Ongoing Treatment</label>
        <input
          type="text"
            value={ongoingTreatment}
          onChange={(e) => setOngoingTreatment(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Unhealthy Habits</label>
        <input
          type="text"
            value={unhealthyHabits}
          onChange={(e) => setUnhealthyHabits(e.target.value)}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Chronic Disease Amount</label>
        <input
          type="number"
          min={0}
            value={numDiseases}
          onChange={handleNumDiseaseChange}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Drug Allergies Amount</label>
        <input
          type="number"
          min={0}
            value={numDrugAllergies}
          onChange={handleNumDrugChange}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
        {Array.from({ length: numDiseases }).map((_, i) => (
        <div className="flex flex-col gap-2 col-span-2"
            key={i}
        >
            <label className="text-sm lg:text-md">Chronic Disease ID</label>
            <input
            type="text"
            placeholder={`Disease ID ${i + 1}`}
            value={diseaseIds[i] || ""}
            onChange={(e) => handleDiseaseIdChange(i, e.target.value)}
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
            />
        </div>
      ))}
        {Array.from({ length: numDrugAllergies }).map((_, i) => (
        <div className="flex flex-col gap-2 col-span-2"
            key={i}
        >
            <label className="text-sm lg:text-md">Drug ID</label>
            <input
            type="text"
            placeholder={`Disease ID ${i + 1}`}
            value={drugIds[i] || ""}
            onChange={(e) => handleDrugChange(i, e.target.value)}
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
            />
        </div>
      ))}
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

export default EditPatientForm;
