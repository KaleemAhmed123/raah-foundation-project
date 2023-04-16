import React from "react";
import "./home.css";
import { Hero, Programs, Vision, Testimonials } from "../../components/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Vision />
      <Testimonials />
    </div>
  );
};

export default Home;
