import { useNavigate } from "react-router-dom";
import AnimatedNumber from "../utils/animation/AnimatedNumber";

const Hero: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="min-h-dvh max-h-dvh flex flex-row items-center justify-center px-16 md:px-28 lg:pr-0 xl:pr-16 text-black">
      <div className="flex-[1_1_0] min-w-[37.5%]">
        <h1 className="text-center text-3xl md:text-5xl lg:text-left lg:text-5xl xl:text-6xl font-inter font-semibold mb-6">
          Excellence in <span className="text-[#2C6975]">Healthcare</span>,
          Compassion in Care
        </h1>
        <h2 className="text-center text-lg md:text-2xl lg:text-xl lg:text-left mb-6">
          Where care meets innovation, your healing begins. Your health is our
          first priority, Siam Hospital
        </h2>
        <div className="flex justify-center lg:justify-start gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#2C6975] text-white md:text-base lg:text-xl font-medium py-2 px-4 md:px-6 lg:px-8 xl:px-10 rounded-lg border-[2px] border-[#2C6975] shadow-soft whitespace-nowrap hover:bg-white hover:border-[#2C6975] hover:text-[#2C6975] active:scale-95 active:bg-[#2C6975] active:text-white transition duration-150"
          >
            <span className="">Our System</span>
          </button>
          <button
            onClick={() => {
              const featureSection = document.getElementById("feature-section");
              featureSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-[#2C6975] md:text-base lg:text-xl font-medium py-2 px-4 md:px-6 lg:px-8 xl:px-10 rounded-lg shadow-soft whitespace-nowrap hover:bg-[#2C6975] hover:text-white active:scale-95 active:bg-white active:text-[#2C6975] transition duration-150"
          >
            System Info
          </button>
        </div>
        <div className="flex justify-center text-center lg:text-left lg:justify-start items-start gap-6 md:gap-20 lg:gap-14 text-sm whitespace-nowrap xl:gap-20 mt-8 lg:mt-14">
          <div>
            <div className="text-[#2C6975] text-lg md:text-2xl lg:text-3xl font-bold">
              <AnimatedNumber targetNumber={50} suffix="+" />
            </div>
            <p>
              Years of
              <br />
              Trusted Care
            </p>
          </div>
          <div>
            <div className="text-[#2C6975] text-lg md:text-2xl lg:text-3xl font-bold">
              <AnimatedNumber targetNumber={21} suffix="M" />
            </div>
            <p>
              Successful
              <br />
              Treatments
            </p>
          </div>
          <div>
            <div className="text-[#2C6975] text-lg md:text-2xl lg:text-3xl font-bold">
              <AnimatedNumber targetNumber={100} suffix="%" />
            </div>
            <p>
              Daily Care,
              <br />
              No Days Off
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:pt-16">
        <div className="flex justify-center">
          <img
            src="hero-image.webp"
            alt="doctor"
            className="h-auto max-h-[70vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
