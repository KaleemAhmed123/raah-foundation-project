import React, { useEffect, useState } from "react";
import "./donate.css";
import emailImg from "../../assets/images/email.png";
import mobile from "../../assets/images/mobile.png";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ammount: 0,
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  // for input element cause they take individual
  const { username, email, ammount, message } = formData;

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
      <h2 className="head-text"> Enter the Details Please. </h2>

      {/* agr submit then message for better ux  */}
      {!isFormSubmitted ? (
        <div className="donate-form app__flex">
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
              type="number"
              placeholder="Enter Ammount..."
              name="ammount"
              value={ammount}
              onChange={handleChangeInput}
            />
          </div>
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
            {!loading ? "Donate Now" : "Processing..."}
          </button>
        </div>
      ) : (
        //
        <div>
          <h3 className="head-text">Thank you for your Donation!</h3>
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

export default Donate;
