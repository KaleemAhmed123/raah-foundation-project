import React from "react";

const SectionName = ({ icon, title }) => {
  return (
    <div className="section__name">
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionName;

// css in indexCSS
