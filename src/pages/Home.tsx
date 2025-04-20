import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
