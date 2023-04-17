import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/main__header.png";
import "./hero.css";

const Hero = () => {
  return (
    <header className="main__hero">
      <div className="container main__hero-container">
        {/* Left part( tag, desc, button) */}
        <div className="main__hero-left">
          <h4>#RaahHelpingHands</h4>
          <h1>Raah Foundation Non Profit Org</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            maiores. Consectetur libero est dolor sit amet consectetur
            adipisicing laboriosam accusamus.
          </p>
          <Link to="/donate" className="btn lg">
            Donate US
          </Link>
        </div>
        {/* Right (circle, image) */}
        <div className="main__hero-right">
          <div className="main__hero-circle"></div>
          <img src={Image} className="main__hero-img" alt="Hero Image" />
        </div>
        {/* Right End */}
      </div>
    </header>
  );
};

export default Hero;
