import HeroSection from "../components/UI/HeroSection";
import Services from "../components/UI/Services";
import Trusted from "../components/UI/Trusted";

export const Home = () => {
  const data = {
    name: "imran store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};
