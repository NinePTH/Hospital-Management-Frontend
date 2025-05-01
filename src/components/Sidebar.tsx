import React from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarLinks: Record<string, { path: string; icon: string; alt: string; label: string; }[]> = {
    "patients-management": [
      { path: "add-patient", icon: "/sidebar/addPatientIcon.webp", alt: "Add Patient", label: "Add Patient" },
      { path: "edit-patient", icon: "/sidebar/editPatientIcon.webp", alt: "Edit Patient", label: "Edit Patient" },
      { path: "add-patient-appointment", icon: "/sidebar/patientAppointmentIcon.webp", alt: "Patient Appointment", label: "Patient Appointment" },
      { path: "add-patient-medical-history", icon: "/sidebar/patientHistoryIcon.webp", alt: "Patient History", label: "Patient History" },
      { path: "search-patient", icon: "/sidebar/patientInformationIcon.webp", alt: "Patient Information", label: "Patient Information" },
    ],
    "employee-management": [
      { path: "add-employee", icon: "/sidebar/addEmployeeIcon.webp", alt: "Add Employee", label: "Add Employee" },
      { path: "edit-employee", icon: "/sidebar/editEmployeeIcon.webp", alt: "Edit Employee", label: "Edit Employee" },
      { path: "search-employee", icon: "/sidebar/searchEmployeeIcon.webp", alt: "Employee Information", label: "Employee Information" },
    ],
  };
  

  const Sidebar: React.FC = () => {
  const location = useLocation();
  const basePath = location.pathname.split("/")[1]; // 'patients-management' or 'employee-management'
  const currentPath = location.pathname; // Full path like '/patients-management/add-patient'

  const links = sidebarLinks[basePath] || [];

  return (
    <nav className="hidden sticky top-0 bg-white shadow-soft min-h-dvh h-full lg:w-1/3 lg:flex flex-col items-start justify-start gap-8 pt-28">
      <p className="text-base leading-5 font-semibold text-[#2C6975] px-10 w-full capitalize">
        {basePath.replace("-", " ")} System
      </p>
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        {links.map((link) => {
          const fullLinkPath = `/${basePath}/${link.path}`;
          const isActive = currentPath === fullLinkPath;

          return (
            <Link
              key={link.path}
              to={fullLinkPath}
              className={`flex items-center gap-4 px-10 py-2 w-full ${
                isActive
                  ? "bg-[#f1f7f7] text-[#2C6975]"
                  : "text-[#2C6975] hover:bg-gray-100"
              }`}
            >
              <img
                src={link.icon}
                alt={link.alt}
                className="h-5"
              />
              <div className="text-base xl:text-xl">
                {link.label}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
  

export default Sidebar;
