import { AnimatePresence, motion } from "motion/react";

const ErrorState = ({ error }: { error: string }) => (
  <AnimatePresence>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-start justify-center shadow-soft rounded-md w-fit h-fit p-10 md:p-10 lg:p-12 bg-white"
    >
      <p>Error: {error}</p>
    </motion.div>
  </AnimatePresence>
);

export default ErrorState;
