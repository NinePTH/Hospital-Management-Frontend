import { useState } from "react";
import { useEditPatient } from "../../hooks/medical_personnel/useEditPatient";

interface PatientData {
  patient: {
    patient_id: string;
    first_name: string;
    last_name: string;
    age: number;
    date_of_birth: string;
    gender: string;
    blood_type: string;
    email: string;
    health_insurance: string;
    address: string;
    phone_number: string;
    id_card_number: string;
    ongoing_treatment: string;
    unhealthy_habits: string;
  };
  numDiseases: number;
  diseaseIds: string[];
  numDrugAllergies: number;
  drugIds: string[];
}

const EditPatientForm = () => {
  const { response, isLoading, handleEditPatient } = useEditPatient();
  console.log("Response:", response);
  const [formData, setFormData] = useState<PatientData>({
    patient: {
      patient_id: "",
      first_name: "",
      last_name: "",
      age: 0,
      date_of_birth: "",
      gender: "",
      blood_type: "",
      email: "",
      health_insurance: "",
      address: "",
      phone_number: "",
      id_card_number: "",
      ongoing_treatment: "",
      unhealthy_habits: "",
    },
    numDiseases: 0,
    diseaseIds: [],
    numDrugAllergies: 0,
    drugIds: [],
  });

  const handleNumDiseaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value) || 0;

    const currentIds = formData.diseaseIds.slice(0, count); // keep existing ones
    const filledIds = [...currentIds];

    while (filledIds.length < count) {
      filledIds.push("");
    }

    setFormData({
      ...formData,
      numDiseases: count,
      diseaseIds: filledIds,
    });
  };

  const handleNumDrugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value) || 0;

    const currentIds = formData.drugIds.slice(0, count); // keep existing ones
    const filledIds = [...currentIds];

    while (filledIds.length < count) {
      filledIds.push("");
    }

    setFormData({
      ...formData,
      numDrugAllergies: count,
      drugIds: filledIds,
    });
  };

  const handleDiseaseIdChange = (index: number, value: string) => {
    const newDiseaseIds = [...formData.diseaseIds];
    newDiseaseIds[index] = value;

    setFormData({
      ...formData,
      diseaseIds: newDiseaseIds,
    });
  };

  const handleDrugChange = (index: number, value: string) => {
    const newDrugIds = [...formData.drugIds];
    newDrugIds[index] = value;

    setFormData({
      ...formData,
      drugIds: newDrugIds,
    });
  };

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      patient: {
        patient_id: "",
        first_name: "",
        last_name: "",
        age: 0,
        date_of_birth: "",
        gender: "",
        blood_type: "",
        email: "",
        health_insurance: "",
        address: "",
        phone_number: "",
        id_card_number: "",
        ongoing_treatment: "",
        unhealthy_habits: "",
      },
      numDiseases: 0,
      diseaseIds: [],
      numDrugAllergies: 0,
      drugIds: [],
    });
  };

  const transformForApi = (data: PatientData) => {
    return {
      patient: data.patient,
      patient_chronic_disease: data.diseaseIds.map((id) => ({
        disease_id: id,
      })),
      patient_drug_allergy: data.drugIds.map((id) => ({ drug_id: id })),
    };
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEditPatient(transformForApi(formData));
    setFormData({
      patient: {
        patient_id: "",
        first_name: "",
        last_name: "",
        age: 0,
        date_of_birth: "",
        gender: "",
        blood_type: "",
        email: "",
        health_insurance: "",
        address: "",
        phone_number: "",
        id_card_number: "",
        ongoing_treatment: "",
        unhealthy_habits: "",
      },
      numDiseases: 0,
      diseaseIds: [],
      numDrugAllergies: 0,
      drugIds: [],
    });
  };

  return (
    <form onSubmit={onSubmit} className="w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-8 gap-4 whitespace-nowrap">
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Patient ID</label>
        <input
          type="text"
          value={formData.patient.patient_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, patient_id: e.target.value },
            })
          }
          placeholder="PXXX"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">First Name</label>
        <input
          type="text"
          value={formData.patient.first_name}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, first_name: e.target.value },
            })
          }
          placeholder="John"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Last Name</label>
        <input
          type="text"
          value={formData.patient.last_name}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, last_name: e.target.value },
            })
          }
          placeholder="Doe"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Age</label>
        <input
          type="number"
          min={1}
          max={120}
          value={formData.patient.age == 0 ? "" : formData.patient.age}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, age: parseInt(e.target.value) },
            })
          }
          placeholder="20"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Date of Birth</label>
        <input
          type="date"
          value={formData.patient.date_of_birth}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, date_of_birth: e.target.value },
            })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Gender</label>
        <select
          value={formData.patient.gender}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, gender: e.target.value },
            })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
          <option value="" disabled hidden>
            Select gender
          </option>
          <option value="male" className="py-2">
            Male
          </option>
          <option value="female" className="py-2">
            Female
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Blood type</label>
        <select
          value={formData.patient.blood_type}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, blood_type: e.target.value },
            })
          }
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
          <option value="" disabled hidden>
            Select blood type
          </option>
          <option value="A" className="py-2">
            A
          </option>
          <option value="B" className="py-2">
            B
          </option>
          <option value="AB" className="py-2">
            AB
          </option>
          <option value="O" className="py-2">
            O
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Email</label>
        <input
          type="email"
          value={formData.patient.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, email: e.target.value },
            })
          }
          placeholder="Example@gmail.com"
          pattern=".+@(gmail\.com|hotmail\.com|email\.com)"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Health Insurance</label>
        <select
          value={formData.patient.health_insurance}
          onChange={(e) => {
            setFormData({
              ...formData,
              patient: {
                ...formData.patient,
                health_insurance: e.target.value,
              },
            });
          }}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
        >
          <option value="" disabled hidden>
            Select insurance status
          </option>
          <option value="yes" className="py-2">
            Yes
          </option>
          <option value="no" className="py-2">
            No
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2 lg:col-span-4 row-span-2">
        <label className="text-sm lg:text-md">Address</label>
        <textarea
          value={formData.patient.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, address: e.target.value },
            })
          }
          placeholder="100 Finn-Huemer-Weg Heindlgasse 94a Oberösterreich Stadtschlaining 2483"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full resize-none"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Phone Number</label>
        <input
          type="text"
          value={formData.patient.phone_number}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, phone_number: e.target.value },
            })
          }
          placeholder="0123456789"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">ID Card Number</label>
        <input
          type="text"
          value={formData.patient.id_card_number}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: { ...formData.patient, id_card_number: e.target.value },
            })
          }
          placeholder="1234567890123"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Ongoing Treatment</label>
        <input
          type="text"
          value={formData.patient.ongoing_treatment}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: {
                ...formData.patient,
                ongoing_treatment: e.target.value,
              },
            })
          }
          placeholder="None"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Unhealthy Habits</label>
        <input
          type="text"
          value={formData.patient.unhealthy_habits}
          onChange={(e) =>
            setFormData({
              ...formData,
              patient: {
                ...formData.patient,
                unhealthy_habits: e.target.value,
              },
            })
          }
          placeholder="None"
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Chronic Disease Amount</label>
        <input
          type="number"
          min={0}
          value={formData.numDiseases}
          onChange={handleNumDiseaseChange}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-sm lg:text-md">Drug Allergies Amount</label>
        <input
          type="number"
          min={0}
          value={formData.numDrugAllergies}
          onChange={handleNumDrugChange}
          className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 focus:outline-none focus:ring-1 focus:ring-[#2C6975] h-full"
        />
      </div>
      {Array.from({ length: formData.numDiseases }).map((_, i) => (
        <div className="flex flex-col gap-2 col-span-2" key={i}>
          <label className="text-sm lg:text-md">Chronic Disease ID</label>
          <select
            value={formData.diseaseIds[i] || ""}
            onChange={(e) => handleDiseaseIdChange(i, e.target.value)}
            required
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
          >
            <option value="" disabled hidden>
              Select disease ID
            </option>
            <option value="R001" className="py-2">
              anti bacteria
            </option>
            <option value="R002" className="py-2">
              paracetamol
            </option>
            <option value="R003" className="py-2">
              amoxicillin
            </option>
            <option value="R004" className="py-2">
              ibuprofen
            </option>
            <option value="R005" className="py-2">
              azithromycin
            </option>
            <option value="R006" className="py-2">
              ciprofloxacin
            </option>
            <option value="R007" className="py-2">
              metformin
            </option>
            <option value="R008" className="py-2">
              omeprazole
            </option>
            <option value="R009" className="py-2">
              atorvastatin
            </option>
            <option value="R010" className="py-2">
              insulin
            </option>
            <option value="R011" className="py-2">
              lisinopril
            </option>
          </select>
        </div>
      ))}
      {Array.from({ length: formData.numDrugAllergies }).map((_, i) => (
        <div className="flex flex-col gap-2 col-span-2" key={i}>
          <label className="text-sm lg:text-md">Drug ID</label>
          <select
            value={formData.diseaseIds[i] || ""}
            onChange={(e) => handleDrugChange(i, e.target.value)}
            required
            className="text-sm border border-[#ACACAC] rounded-md py-1 px-2 lg:py-2 lg:px-4 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
          >
            <option value="" disabled hidden>
              Select drug ID
            </option>
            <option value="I001" className="py-2">
              streptococcus pneumoniae
            </option>
            <option value="I002" className="py-2">
              tuberculosis
            </option>
            <option value="I003" className="py-2">
              hepatitis B
            </option>
            <option value="I004" className="py-2">
              malaria
            </option>
            <option value="I005" className="py-2">
              dengue fever
            </option>
            <option value="I006" className="py-2">
              measles
            </option>
            <option value="I007" className="py-2">
              influenza
            </option>
            <option value="I008" className="py-2">
              cholera
            </option>
            <option value="I009" className="py-2">
              typhoid fever
            </option>
            <option value="I010" className="py-2">
              rabies
            </option>
            <option value="I011" className="py-2">
              meningitis
            </option>
          </select>
        </div>
      ))}
      <div className="col-span-full flex flex-wrap justify-center sm:justify-normal gap-4 mt-4">
        <button
          onClick={handleClear}
          type="button"
          disabled={isLoading}
          className="px-8 py-1 bg-white text-[#2C6975] border-2 border-[#2C6975] rounded-md hover:bg-[#2C6975] hover:text-white active:scale-95 active:bg-white active:text-[#2C6975] transition duration-150 ease-in-out"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-1 bg-[#2C6975] text-white border-2 border-[#2C6975] rounded-md hover:bg-white hover:text-[#2C6975] hover:border-[#2C6975] active:scale-95 active:bg-[#2C6975] active:text-white transition duration-150 ease-in-out"
        >
          Done
        </button>
      </div>
    </form>
  );
};

export default EditPatientForm;
