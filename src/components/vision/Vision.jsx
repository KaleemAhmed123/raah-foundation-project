import "./vision.css";
import Img from "../../assets/images/gallery1_6.webp";
import { GiCutDiamond } from "react-icons/gi";
import { vision } from "../../utils/data";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import SectionName from "../../components/sectionName/SectionName";

const Vision = () => {
  return (
    <section className="visions">
      <div className="container vision__container">
        {/* Left img */}
        <div className="visions__left">
          <div className="visions__image">
            <img
              src="https://dummyimage.com/650x850/bfbfbf/fff.png"
              alt="vision images"
            />
          </div>
        </div>
        {/* Right grid */}
        <div className="visions__right">
          <SectionName icon={<GiCutDiamond />} title="Vision" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            libero lateq issa autem perspiciatis beatae enim aliquam.
          </p>
          <div className="vision__wrapper">
            {vision.map(({ icon, title, desc, id }) => {
              return (
                <CardWrapper key={id} className="vision">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </CardWrapper>
              );
            })}
          </div>
        </div>
        {/* right end */}
      </div>
    </section>
  );
};

export default Vision;
