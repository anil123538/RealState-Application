import React, { useState } from "react";
import Search from "../components/Search";
import CheckEligibility from "../components/CheckEligibility";
import HomeTestimonial from "../components/HomeTestimonial";
import QuickChat from "../components/QuickChat";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Rent");
  return (
    <>
    <QuickChat />
      <Search
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <CheckEligibility selectedOption={selectedOption} />
      <HomeTestimonial />
    </>
  );
};

export default Home;
