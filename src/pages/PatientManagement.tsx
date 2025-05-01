import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddPatientForm from "../components/patientManagement/AddPatientForm";
import FormLayout from "../components/FormLayout";
import EditPatientForm from "../components/patientManagement/EditPatientForm";
import PatientAppointmentForm from "../components/patientManagement/PatientAppointmentForm";
import PatientHistoryForm from "../components/patientManagement/PatientHistoryForm";
import SearchPatient from "../components/patientManagement/SearchPatient";

const PatientManagement: React.FC = (): JSX.Element => {
  const location = useLocation();

  const components: Record<string, { path: string; component: JSX.Element }[]> =
    {
      "patients-management": [
        { path: "add-patient", component: <FormLayout h1="New Patient" component={<AddPatientForm />} /> },
        { path: "edit-patient", component: <FormLayout h1="Edit Patient" component={<EditPatientForm />} /> },
        { path: "add-patient-appointment", component: <FormLayout h1="Patient Appointment" component={<PatientAppointmentForm />} /> },
        { path: "add-patient-medical-history", component: <FormLayout h1="Patient History" component={<PatientHistoryForm />} /> },
        { path: "search-patient", component: <SearchPatient /> },
      ]
    };

  const currentPath = location.pathname.split("/")[1];

  const renderComponent = components[currentPath].find(
    (component) => component.path === location.pathname.split("/")[2]
  )?.component;

  return (
    <div className="bg-[url('/patientManagementSystem/patientManagementBG.webp')] bg-cover">
      <Navbar />
      <div className="flex flex-row justify-start items-start w-dvw min-h-dvh h-full">
        <Sidebar />
        <div className="w-full pt-28 pb-8 px-8 md:px-14 lg:px-28 xl:px-56">{renderComponent}</div>
      </div>
    </div>
  );
};

export default PatientManagement;
