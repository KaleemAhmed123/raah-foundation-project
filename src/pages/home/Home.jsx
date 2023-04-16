import React from "react";
import "./home.css";
import Hero from "../../components/hero/Hero";
import Programs from "../../components/programs/programs";
import Vision from "../../components/vision/Vision";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Vision />
    </div>
  );
};

export default Home;
