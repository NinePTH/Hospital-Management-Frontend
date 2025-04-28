import { motion } from "framer-motion";

const features = [
  {
    title: "Patients",
    description:
      "Access your medical records anytime, anywhere. From past diagnoses to prescriptions, everything is stored securely and organized for you. Stay informed and in control of your health journey.",
    image: "device1.webp",
    reverse: false,
  },
  {
    title: "HR Departments",
    description:
      "Easily manage employee information in one centralized system. Add and update employee health data with confidence, all while ensuring data privacy and compliance.",
    image: "device2.webp",
    reverse: true,
  },
  {
    title: "Medical Personnel",
    description:
      "Streamline your workflow with a system that lets you add and update patient information efficiently. Focus more on care, and less on paperwork.",
    image: "device3.webp",
    reverse: false,
  },
];

const Feature = () => {
  return (
    <div className="pt-20 pb-36 px-8 md:px-28 min-h-fit w-full">
      <div className="flex flex-col items-center justify-center gap-32 text-center min-h-dvh">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-inter font-semibold text-3xl md:text-3xl w-2/3 sm:w-full"
        >
          Your <span className="text-[#2C6975]">Personal</span> Health Portal
        </motion.h1>

        <div className="flex flex-col items-center justify-center gap-16 lg:gap-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`flex flex-col ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-evenly gap-10 lg:gap-0 w-full h-full`}
            >
              <img src={feature.image} alt="device" className="w-auto" />
              <div className="w-2/3 lg:w-1/3 text-center lg:text-left">
                <h1 className="text-[#2C6975] text-2xl font-semibold font-inter">
                  {feature.title}
                </h1>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
