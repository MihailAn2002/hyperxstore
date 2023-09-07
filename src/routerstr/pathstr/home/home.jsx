import React from "react";
import c from "./home.module.css";
import Section1_home from "./section1home/section1home";
import Section2_home from "./section2home/section2home";
import Section4_home from "./section4home/section4home";
import Section5_home from "./section5home/section5home";
import Section3_home from "./section3home/section3home";

const Home = () => {
  return (
    <div>
      <Section1_home />
      <Section2_home />
      <Section3_home />
      <Section4_home />
      <Section5_home />
    </div>
  );
};

export default Home;
