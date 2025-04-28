import Feature from "../components/home/Feature";
import Footer from "../components/home/Footer";
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
      <div id="feature-section">
        <Feature />
      </div>
      <LastCTA />
      <Footer />
    </div>
  );
};

export default Home;
