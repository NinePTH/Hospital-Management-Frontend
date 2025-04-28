export interface PatientData {
    patient: PatientGeneralInfo
    medical_history: MedicalHistory[]
    patient_chronic_disease: PatientChronicDiseases[]
    patient_drug_allergy: PatientDrugAllergy[]
  }

  interface PatientGeneralInfo {
    patient_id: string;
    first_name: string;
    last_name: string;
    age: number;
    gender: string;
    date_of_birth: string;
    blood_type: string;
    email: string;
    health_insurance: boolean;
    address: string;
    phone_number: string;
    id_card_number: string;
    ongoing_treatment: string;
  }
  interface MedicalHistory {
    details: string;
    date: string;
    time: string;
  }

  interface PatientChronicDiseases {
    disease_id: string[];
  }

  interface PatientDrugAllergy {
    drug_id: string[];
  }