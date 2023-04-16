import React from "react";
import { FaCrown } from "react-icons/fa";
import { programs } from "../../utils/data";
import SectionName from "../sectionName/SectionName";
import CardWrapper from "../cardWrapper/CardWrapper";

const Programs = () => {
  return (
    <section className="P">
      <div className="container programs__container">
        <SectionName icon={<FaCrown />} title="Programs" />
        <div className="programs__wrapper">
          {programs.map(({ icon, title, info, id }) => {
            return (
              <CardWrapper key={id} className="programs_program">
                {/* childrens */}
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
