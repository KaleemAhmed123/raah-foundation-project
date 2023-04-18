import React from "react";
import "./about.css";
import TopBanner from "../../components/topBanner/TopBanner";
import image from "../../assets/images/Banner.jpg";
import aboutImg from "../../assets/images/about1.jpg";

const About = () => {
  return (
    <>
      <TopBanner title="About US" image={image}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
        voluptatibus ut, enim sint accusamus et laboriosam modi sed
        reprehenderit quidem. Quae obcaecati ad nisi est, adipisci cumque
        consectetur unde provident?
      </TopBanner>

      {/* <section className="about">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={aboutImg} alt="story img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              delectus, quae cumque veritatis quasi dolores ea consequuntur rem
              quidem magni iusto quo ab atque expedita quibusdam iure enim.
              Facere et quia optio itaque adipisci quas fuga reiciendis
              consectetur nulla magni, blanditiis, sint iste atque omnis. Culpa
              officiis alias hic tenetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              delectus, quae cumque veritatis quasi dolores ea consequuntur rem
              quidem magni sint iste atque omnis. Culpa officiis alias hic
              tenetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              delectus, quae cumque veritatis quasi dolores ea consequuntur rem
              quidem magni.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
