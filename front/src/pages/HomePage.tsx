import React from "react";
import HeroSection from "../components/HeroSection";
import GridSection from "../components/GridSection";
import Banner from "../components/Banner";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <GridSection />
      <Banner/>
    </>
  );
};

export default HomePage;
