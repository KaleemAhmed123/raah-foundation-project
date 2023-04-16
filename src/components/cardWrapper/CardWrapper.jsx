import React from "react";

const CardWrapper = ({ className, children }) => {
  return <article className={`card ${className}`}>{children}</article>;
};

export default CardWrapper;
