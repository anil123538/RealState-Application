import React, { useState } from "react";
import Search from "../components/Search";
import CheckEligibility from "../components/CheckEligibility";
import HomeTestimonial from "../components/HomeTestimonial";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Rent");
  return (
    <>
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
