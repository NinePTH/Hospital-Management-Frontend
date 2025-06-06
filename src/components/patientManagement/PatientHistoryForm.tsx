import { useState } from "react";
import { useAddPatientHistory } from "../../hooks/medical_personnel/useAddPatientHistory";

const PatientHistoryForm = () => {
  const { response, isLoading, handleAddPatientHistory } =
    useAddPatientHistory();
  console.log("Response:", response);
  const [formData, setFormData] = useState({
    patient_id: "",
    time: "",
    date: "",
    detail: "",
  });

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      patient_id: "",
      time: "",
      date: "",
      detail: "",
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddPatientHistory(formData);
    setFormData({
      patient_id: "",
      time: "",
      date: "",
      detail: "",
    });
  };

  return (
    <form onSubmit={onSubmit} className="w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-4 whitespace-nowrap">
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Patient ID</label>
        <input
          required
          type="text"
          value={formData.patient_id}
          onChange={(e) =>
            setFormData({ ...formData, patient_id: e.target.value })
          }
          placeholder="PXXX"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Time</label>
        <input
          required
          type="text"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          placeholder="10:50:45"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2 lg:col-span-4 row-span-2">
        <label className="text-sm lg:text-md">Detail</label>
        <textarea
          value={formData.detail}
          onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
          placeholder="The patient reports experiencing persistent symptoms for several consecutive days, including cough, fever, nasal congestion, and headache. The patient suspects they may be ill. Symptoms are consistent with a possible upper respiratory tract infection, influenza, or COVID-19. Recommend further evaluation and monitoring of vital signs. Advise physician consultation if symptoms worsen or persist beyond expected duration."
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full resize-none"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Date</label>
        <input
          required
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>

      <div className="col-span-2 flex items-end justify-center lg:justify-end gap-2">
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
          Add
        </button>
      </div>
    </form>
  );
};

export default PatientHistoryForm;
