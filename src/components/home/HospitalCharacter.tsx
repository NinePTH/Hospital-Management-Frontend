import { motion } from "motion/react";

const HospitalCharacter = () => {
  return (
    <div
      
      className=" pb-28 px-28 min-h-fit w-full"
    >
        <motion.section
        initial={{ opacity: 0, y: 50 }} // Start: invisible + moved down 50px
        whileInView={{ opacity: 1, y: 0 }} // Animate to: visible + correct position
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible, and only once
        className="flex flex-col items-center justify-center gap-16">
      <div className="text-center">
        <h1 className="text-3xl font-semibold font-inter mb-4 text-[#2C6975]">
          Advanced Care
        </h1>
        <p>Tailored for You & Your Unique Health Needs</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        <div className="text-center flex flex-col justify-center items-center">
          <img
            src="/stethoscope.webp"
            alt="stethoscope"
            className=" w-1/3 md:w-1/3 max-w-[100px] lg:max-w-[300px] mb-6"
          />
          <h2 className="text-lg font-bold text-[#2C6975]">
            Full-Spectrum Care
          </h2>
          <p>From preventive care to complex procedures</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img
            src="/business.webp"
            alt="expert"
            className="w-1/3 md:w-1/4 max-w-[100px] lg:max-w-[300px] mb-6"
          />
          <h2 className="text-lg font-bold text-[#2C6975]">
            Expert Medical Specialists
          </h2>
          <p>A team of highly qualified and experienced professionals</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img
            src="/microscope.webp"
            alt="microscope"
            className="w-1/3 md:w-[22%] max-w-[100px] lg:max-w-[300px] mb-6"
          />
          <h2 className="text-lg font-bold text-[#2C6975]">
            Innovative Technology
          </h2>
          <p>
            State-of-the-art medical equipment and research-driven treatments
          </p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img
            src="/herb.webp"
            alt="herb"
            className="w-1/3 md:w-1/3 max-w-[100px] lg:max-w-[300px] mb-6"
          />
          <h2 className="text-lg font-bold text-[#2C6975]">
            Healing Environment
          </h2>
          <p>A calm, modern, and patient-centered hospital design</p>
        </div>
      </div>
      </motion.section>
    </div>
  );
};

export default HospitalCharacter;
