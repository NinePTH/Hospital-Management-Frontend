import { motion } from "motion/react";

const LoadingState = () => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.2 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-start justify-center shadow-soft rounded-md w-fit h-fit py-10 px-8 md:p-10 lg:p-12 bg-white"
  >
    <p>Loading profile...</p>
  </motion.div>
);

export default LoadingState;