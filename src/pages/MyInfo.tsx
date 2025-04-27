import Navbar from "../components/Navbar";
import { usePatientProfile } from "../hooks/usePatientProfile";
import ErrorState from "../components/myinfo/ErrorState";
import LoadingState from "../components/myinfo/LoadingState";
import Profile from "../components/myinfo/Profile";

const MyInfo: React.FC = (): JSX.Element => {
  const { profile, patientData, isLoading, error } = usePatientProfile();

  const pageWrapper = "min-h-dvh flex flex-col items-center justify-center pt-[22.5%] pb-[7.5%] md:pt-[12.5%] md:pb-[5%] lg:pt-[9.5%] lg:pb-[4%]  bg-[url(/background.webp)] bg-cover bg-center bg-no-repeat"

  if (isLoading) {
    return (
      <div className={pageWrapper}>
        <Navbar />
        <LoadingState />
      </div>
    );
  }

  if (error) {
    return (
      <div className={pageWrapper}>
        <Navbar />
        <ErrorState error={error} />
      </div>
    );
  }

  return (
    <div className={pageWrapper}>
      <Navbar />
      <Profile profile={profile} patientData={patientData} />
    </div>
  );
};

export default MyInfo;
