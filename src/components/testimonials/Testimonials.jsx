import "./testimonials.css";
import { useState } from "react";
import { SectionName, CardWrapper } from "../index";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../../utils/data";

const Testimonials = () => {
  const [idx, setidx] = useState(0);
  const { name, quote, job, avatar } = testimonials[idx];

  const prevHandler = () => {
    if (idx <= 0) setidx(testimonials.length - 1);
    else setidx((prev) => prev - 1);
  };
  const nextHandler = () => {
    if (idx >= testimonials.length - 1) setidx(0);
    else setidx((prev) => prev + 1);
  };

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionName
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonial__head"
        />
        <CardWrapper className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </CardWrapper>
        <div className="testimonials__btn-container">
          <button className="testimonial__btn">
            {" "}
            <IoIosArrowDropleftCircle onClick={prevHandler} />
          </button>
          <button className="testimonial__btn">
            {" "}
            <IoIosArrowDroprightCircle onClick={nextHandler} />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
