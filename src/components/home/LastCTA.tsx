import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const LastCTA = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10 px-28 min-h-fit w-full bg-[#2C6975]">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3, // 0.3s delay between each child
              },
            },
          }}
        className="flex flex-col items-center justify-center gap-6 text-center text-white"
      >
        <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-inter font-semibold text-2xl md:text-3xl">
          Connect to Your Hospital's Trusted System
        </motion.h1>
        <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="hidden md:block md:text-base w-2/3">
          Our system is designed to support seamless collaboration within the
          hospital. Patients can securely view their medical information and
          records, HR can manage employee data with ease, and medical personnel
          can focus on delivering the best care with accurate, up-to-date
          information.
        </motion.p>
        <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          onClick={() => navigate("/login")}
          className="bg-white text-[#2C6975] md:text-base lg:text-xl font-medium py-2 px-4 md:px-6 lg:px-8 xl:px-10 rounded-lg shadow-soft whitespace-nowrap border-[2px] border-white hover:bg-[#2C6975] hover:text-white hover:border-[2px] hover:border-white active:scale-95 active:bg-white active:text-[#2C6975] transition duration-150"
        >
          Access the System
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LastCTA;
