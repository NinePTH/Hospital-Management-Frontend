import { motion } from "motion/react"

const Feature = () => {
    return (
        <div className="py-10 px-28 min-h-fit w-full">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3, // 0.3s delay between each child
            },
          },
        }}
        className="flex flex-col items-center justify-center gap-6 text-center min-h-dvh"
      >
        <motion.h1
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="font-inter font-semibold text-3xl md:text-3xl">
          Your <span className="text-[#2C6975]">Personal</span> Health Portal
        </motion.h1>
      </motion.section>
    </div>
    )
}

export default Feature