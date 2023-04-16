import React from "react";
import { FaCrown } from "react-icons/fa";

const programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionName icon={<FaCrown />} title="Programs" />
      </div>
    </section>
  );
};

export default programs;
