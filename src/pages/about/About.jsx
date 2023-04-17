import React from "react";
import "./about.css";
import TopBanner from "../../components/topBanner/TopBanner";
import image from "../../assets/images/header_bg_1.jpg";

const About = () => {
  return (
    <>
      <TopBanner title="About US" image={image}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
        voluptatibus ut, enim sint accusamus et laboriosam modi sed
        reprehenderit quidem. Quae obcaecati ad nisi est, adipisci cumque
        consectetur unde provident?
      </TopBanner>
    </>
  );
};

export default About;
