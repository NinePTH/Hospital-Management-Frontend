import { motion, useMotionValue, animate, useAnimationFrame } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
    targetNumber: number;
    suffix: string;
}

export default function AnimatedNumber({ targetNumber, suffix }: AnimatedNumberProps) {
  const count = useMotionValue(0);
  const [displayNumber, setDisplayNumber] = useState(0);

  useAnimationFrame(() => {
    setDisplayNumber(Math.floor(count.get()));
  });

  useEffect(() => {
    const controls = animate(count, targetNumber, {
      type: "tween",
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop; // Cleanup animation if the component unmounts
  }, [targetNumber, count]);

  return (
    <motion.div className="text-2xl md:text-[2rem] font-bold">
      {displayNumber}{suffix}
    </motion.div>
  );
}
