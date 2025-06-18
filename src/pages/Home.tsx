import Feature from "../components/home/Feature";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import HospitalCharacter from "../components/home/HospitalCharacter";
import LastCTA from "../components/home/LastCTA";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
};

const Home: React.FC = (): JSX.Element => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Hero />
      <HospitalCharacter />
      <div id="feature-section">
        <Feature />
      </div>
      <LastCTA />
      <Footer />
    </motion.div>
  );
};

export default Home;
