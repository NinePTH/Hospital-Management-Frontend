import { EmployeeData } from "../../types";

interface ProfileSectionProps {
  error?: string | null;
  employeeData?: EmployeeData[] | null;
}

const EmployeeInfoSection = ({ error, employeeData }: ProfileSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {error != null ? (
          <p className="col-span-2 text-[#2C6975] text-xl sm:text-2xl text-center">
            No result
          </p>
        ) : employeeData?.length ? (
          employeeData.map((employee, index) => {
            const patientInfo = [
              { label: "Staff ID", value: employee.employee_id },
              { label: "First Name", value: employee.first_name },
              { label: "Last Name", value: employee.last_name },
              { label: "Position", value: employee.position_name },
              { label: "Department", value: employee.department_name },
              { label: "Phone Number", value: employee.phone_number },
              { label: "Salary", value: employee.salary },
              { label: "Email", value: employee.email },
              { label: "Hire Date", value: employee.hire_date },
              { label: "Resignation Date", value: employee.resignation_date },
              { label: "Working Status", value: employee.work_status },
            ];

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 place-items-start gap-5 lg:gap-0"
              >
                <div className="text-left col-span-1 md:col-span-2 w-full">
                  {patientInfo.map(({ label, value }) => (
                    <div key={label} className="flex justify-between md:block">
                      <span>{label}:</span>
                      <span className="text-right"> {value || "-"}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-2 text-[#2C6975] text-xl sm:text-2xl text-center">
            No patient data available.
          </p>
        )}
      </div>
    </>
  );
};

export default EmployeeInfoSection;
