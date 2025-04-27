import { motion } from "motion/react";

const Feature = () => {
  return (
    <div className="pt-20 pb-36 px-28 min-h-fit w-full">
      <div
        className="flex flex-col items-center justify-center gap-32 text-center min-h-dvh"
      >
        <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-inter font-semibold text-3xl md:text-3xl"
        >
          Your <span className="text-[#2C6975]">Personal</span> Health Portal
        </motion.h1>
        <div className="flex flex-col items-center justify-center gap-16 lg:gap-32">
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col lg:flex-row items-center justify-evenly gap-16 lg:gap-0 w-full h-full">
            <img src="device1.webp" alt="device" className="w-auto" />
            <div className="w-2/3 lg:w-1/3 text-center lg:text-left">
              <h1 className="text-[#2C6975] text-2xl font-semibold font-inter">
                Patients
              </h1>
              <p>
                Access your medical records anytime, anywhere. From past
                diagnoses to prescriptions, everything is stored securely and
                organized for you. Stay informed and in control of your health
                journey.
              </p>
            </div>
          </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-16 lg:gap-0 w-full h-full">
            <div className="w-2/3 lg:w-1/3 text-center lg:text-left">
              <h1 className="text-[#2C6975] text-2xl font-semibold font-inter">
                HR Departments
              </h1>
              <p>
                Easily manage employee information in one centralized system.
                Add and update employee health data with confidence, all while
                ensuring data privacy and compliance.
              </p>
            </div>
            <img src="device2.webp" alt="device" className="w-auto" />
          </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col lg:flex-row items-center justify-evenly gap-16 lg:gap-0 w-full h-full">
            <img src="device3.webp" alt="device" className="w-auto" />
            <div className="w-2/3 lg:w-1/3 text-center lg:text-left">
              <h1 className="text-[#2C6975] text-2xl font-semibold font-inter">
                Medical Personnel
              </h1>
              <p>
                Streamline your workflow with a system that lets you add and
                update patient information efficiently. Focus more on care, and
                less on paperwork.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
