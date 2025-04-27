import { motion } from "motion/react";

const HospitalCharacter = () => {
  return (
    <div
      
      className=" pb-28 px-28 min-h-fit w-full"
    >
        <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3, // 0.3s delay between each child
            },
          },
        }}
        className="flex flex-col items-center justify-center gap-20">
      <div className="text-center">
        <motion.h1
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-3xl font-semibold font-inter mb-4 text-[#2C6975]">
          Advanced Care
        </motion.h1>
        <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        >Tailored for You & Your Unique Health Needs</motion.p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-20 lg:gap-8">
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-center flex flex-col justify-center items-center">
          <img
            src="/stethoscope.webp"
            alt="stethoscope"
            className=" w-1/3 md:w-1/3 max-w-[80px] lg:max-w-[90px] mb-6"
          />
          <h2 className="text-lg font-bold text-[#2C6975]">
            Full-Spectrum Care
          </h2>
          <p>From preventive care to complex procedures</p>
        </motion.div>
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }} className="text-center flex flex-col justify-center items-center">
          <img
            src="/business.webp"
            alt="expert"
            className="w-1/3 md:w-1/4 max-w-[80px] lg:max-w-[90px] mb-6"
          />
          <h2 className="text-lg font-bold text-[#2C6975]">
            Expert Medical Specialists
          </h2>
          <p>A team of highly qualified and experienced professionals</p>
        </motion.div>
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }} className="text-center flex flex-col justify-center items-center">
          <img
            src="/microscope.webp"
            alt="microscope"
            className="w-1/3 md:w-[22%] max-w-[70px] lg:max-w-[80px] mb-6"
          />
          <h2 className="text-lg font-bold text-[#2C6975]">
            Innovative Technology
          </h2>
          <p>
            State-of-the-art medical equipment and research-driven treatments
          </p>
        </motion.div>
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }} className="text-center flex flex-col justify-center items-center">
          <img
            src="/herb.webp"
            alt="herb"
            className="w-1/3 md:w-1/3 max-w-[80px] lg:max-w-[90px] mb-6"
          />
          <h2 className="text-lg font-bold text-[#2C6975]">
            Healing Environment
          </h2>
          <p>A calm, modern, and patient-centered hospital design</p>
        </motion.div>
      </div>
      </motion.section>
    </div>
  );
};

export default HospitalCharacter;
