import React from "react";
import "./home.css";
import {
  Hero,
  Programs,
  Vision,
  Testimonials,
  Footer,
} from "../../components/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Vision />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
