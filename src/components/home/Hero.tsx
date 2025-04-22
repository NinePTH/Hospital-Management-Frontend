import { useNavigate } from "react-router-dom";

const Hero: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="min-h-dvh max-h-dvh flex flex-row items-center justify-center px-32 text-black">
      <div className="flex-[1_1_0]">
        <h1 className="text-center md:text-3xl lg:text-left lg:text-5xl font-playfair font-medium mb-6">
          Excellence in Healthcare, Compassion in Care
        </h1>
        <h2 className="text-center lg:text-xl lg:text-left mb-6">
          Where care meets innovation, your healing begins. Your health is our
          first priority, Siam Hospital
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="bg-[#2C6975] text-white text-xl py-3 px-8 rounded-md border-[2px] border-[#2C6975] hover:bg-white hover:border-[#2C6975] hover:text-[#2C6975] active:scale-95 active:bg-[#2C6975] active:text-white transition duration-150"
        >
          Get into our system
        </button>
      </div>
      <div className="hidden lg:block self-end flex-[1_1_0]">
        <div className="flex justify-center h-full">
          <img
            src="hero-image.webp"
            alt="doctor"
            className="lg:max-h-[82.5vh]"
          />
        </div>
      </div>
      {/* <div className="absolute z-[-1] top-14 left-15 w-20 h-20 rounded-full bg-[#2C6975]"></div> */}
    </div>
  );
};

export default Hero;
