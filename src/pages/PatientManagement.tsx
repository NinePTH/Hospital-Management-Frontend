import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddPatient from "../components/patientManagement/AddPatient";
import Sidebar from "../components/Sidebar";

const PatientManagement: React.FC = (): JSX.Element => {
  const location = useLocation();

  const components: Record<string, { path: string; component: JSX.Element }[]> =
    {
      "patients-management": [
        { path: "add-patient", component: <AddPatient /> },
        { path: "edit-patient", component: <AddPatient /> },
        { path: "add-patient-apppointment", component: <AddPatient /> },
        { path: "add-patient-medical-history", component: <AddPatient /> },
        { path: "search-patient", component: <AddPatient /> },
      ],
      "employee-management": [
        { path: "add-employee", component: <AddPatient /> },
        { path: "edit-employee", component: <AddPatient /> },
        { path: "search-employee", component: <AddPatient /> },
      ],
    };

  const currentPath = location.pathname.split("/")[1];
  console.log(currentPath);

  const renderComponent = components[currentPath].find(
    (component) => component.path === location.pathname.split("/")[2]
  )?.component;

  return (
    <div className="bg-[url('/patientManagementSystem/patientManagementBG.webp')] bg-cover">
      <Navbar />
      <div className="flex flex-row justify-start items-start w-dvw min-h-dvh h-full">
        <Sidebar />
        <div className="w-full mt-auto pt-28 pb-8 md:px-14 lg:px-28 xl:px-56">{renderComponent}</div>
      </div>
    </div>
  );
};

export default PatientManagement;
