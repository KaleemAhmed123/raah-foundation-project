import Img from "../../assets/images/values.jpg";
import { GiCutDiamond } from "react-icons/gi";
import { vision } from "../../utils/data";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import SectionName from "../../components/sectionName/SectionName";

const Vision = () => {
  return (
    <section className="vision">
      <div className="container vision__wrapper">
        {/* Left img */}
        <div className="vision__left">
          <div className="values__image">
            <img src={Img} alt="vision images" />
          </div>
        </div>
        {/* Right grid */}
        <div className="vision__right">
          <SectionName icon={<GiCutDiamond />} title="Vision" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            libero autem perspiciatis beatae enim aliquam.
          </p>
          <div className="vision__wrapper">
            {vision.map(({ icon, title, desc, id }) => {
              return (
                <CardWrapper key={id} className="vision__value">
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
