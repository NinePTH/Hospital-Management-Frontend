import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/patients-management/add-patient",
    icon: "/sidebar/addPatientIcon.webp",
    alt: "Add Patient",
    label: "Add Patient",
  },
  {
    to: "/patients-management/edit-patient",
    icon: "/sidebar/editPatientIcon.webp",
    alt: "Edit Patient",
    label: "Edit Patient",
  },
  {
    to: "/patients-management/add-patient-apppointment",
    icon: "/sidebar/patientAppointmentIcon.webp",
    alt: "Patient Appointment",
    label: "Patient Appointment",
  },
  {
    to: "/patients-management/add-patient-medical-history",
    icon: "/sidebar/patientHistoryIcon.webp",
    alt: "Patient History",
    label: "Add History",
  },
  {
    to: "/patients-management/search-patient",
    icon: "/sidebar/patientInformationIcon.webp",
    alt: "Patient Information",
    label: "Patient Information",
  },
];

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-white shadow-soft min-h-dvh w-1/3 flex flex-col items-start justify-start gap-8 pt-28">
      <p className="text-base leading-5 font-semibold text-[#2C6975] px-10 w-full">
        Patient Management System
      </p>
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center gap-4 px-10"
          >
            <img src={link.icon} alt={link.alt} className="h-5" />
            <div className="flex items-center text-xl text-[#2C6975]">
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
