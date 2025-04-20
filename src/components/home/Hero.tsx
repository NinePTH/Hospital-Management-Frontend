import { useNavigate } from "react-router-dom";

const Hero: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
  return (
    <div className=" bg-[url(/hero-bg2.webp)] bg-cover bg-center bg-no-repeat">
      <div className="min-h-dvh flex flex-col items-center justify-center md:bg-gradient-to-b from-[#ffffffe0] from-5% to-transparent text-black">

        <h1 className="lg:text-6xl font-medium mb-4">
        Welcome to Siam Hospital
      </h1>
      <h2 className="lg:text-2xl mb-4">
        Excellence in Healthcare, Compassion in Care
      </h2>
      <button
        onClick={() =>navigate("/login")}
        className="bg-[#2C6975] text-white py-2 px-4 rounded-md active:scale-95 active:bg-[#25444e] transition duration-150"
      >
        Go to our system
      </button>
        </div>
    </div>
  );
};

export default Hero;
