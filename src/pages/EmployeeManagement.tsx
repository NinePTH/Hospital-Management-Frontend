import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FormLayout from "../components/FormLayout";
import AddEmployeeForm from "../components/employeeManagement/AddEmployeeForm";
import EditEmployeeForm from "../components/employeeManagement/EditEmployeeForm";
import SearchEmployee from "../components/employeeManagement/SearchEmployee";

const EmployeeManagement: React.FC = (): JSX.Element => {
  const location = useLocation();

  const components: Record<string, { path: string; component: JSX.Element }[]> =
    {
      "employees-management": [
        { path: "add-employee", component: <FormLayout h1="New Employee" component={<AddEmployeeForm />} /> },
        { path: "edit-employee", component: <FormLayout h1="Edit Employee" component={<EditEmployeeForm />} /> },
        { path: "search-employee", component: <SearchEmployee /> },
      ]
    };

  const currentPath = location.pathname.split("/")[1];

  const renderComponent = components[currentPath].find(
    (component) => component.path === location.pathname.split("/")[2]
  )?.component;

  return (
    <div className="bg-[url('/employeeManagementSystem/employeeManagementBG.webp')] bg-cover">
      <Navbar />
      <div className="flex flex-row justify-start items-start w-dvw min-h-dvh h-full">
        <Sidebar />
        <div className="w-full pt-28 pb-8 px-8 md:px-14 lg:px-28 xl:px-56">{renderComponent}</div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
