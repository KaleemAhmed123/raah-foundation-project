import React, { useState, useEffect } from "react";
import "./join.css";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { username, email, phone, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    // setLoading(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  //
  return (
    <div className="donate-page">
      <h2 className="head-text"> Join Us Today and Help Needy </h2>

      {/* agr submit then message for better ux  */}
      {!isFormSubmitted ? (
        <div className="donate-form app__flex">
          {/* <p className="joining-message app_flex">
            {" "}
            If you are willing and have desire to help those who are in need. If
            you are someone young, active and ready to change the world for
            better and be an inspiration. We are looking forward to see you in
            our volunteer family.{" "}
          </p> */}

          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name..."
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email..."
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Phone Number..."
              name="phone"
              value={phone}
              onChange={handleChangeInput}
            />
          </div>
          {/* <div className="app__flex">
            <input
              className="p-text"
              type="number"
              placeholder="Enter Ammount..."
              name="ammount"
              value={ammount}
              onChange={handleChangeInput}
            />
          </div> */}
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message to US..."
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Join US" : "Processing..."}
          </button>
        </div>
      ) : (
        //
        <div>
          <h3 className="head-text">Thank you for your Request!</h3>
        </div>
      )}
      {/* <div className="donate-cards">
        <div className="donate__contact-card">
          <img src={emailImg} alt="email" />
          <a href="mailto:raahfoundationup@gmail.com" className="p-text">
            mailto:raahfoundationup@gmail.com
          </a>
        </div>
        <div className="donate__contact-card">
          <img src={mobile} alt="phone" />
          <a href="tel:+918810995424" className="p-text">
            +918810995424
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Join;
