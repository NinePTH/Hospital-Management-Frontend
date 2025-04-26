import Feature from "../components/home/Feature";
import Hero from "../components/home/Hero";
import HospitalCharacter from "../components/home/HospitalCharacter";
import LastCTA from "../components/home/LastCTA";
import Navbar from "../components/Navbar";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HospitalCharacter />
      <Feature />
      <LastCTA />
    </div>
  );
};

export default Home;
