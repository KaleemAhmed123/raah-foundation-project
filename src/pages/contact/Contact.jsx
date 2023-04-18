import "./contact.css";
import TopBanner from "../../components/topBanner/TopBanner";
import image from "../../assets/images/Banner.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <TopBanner title="Get In Touch" image={image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quidem.
      </TopBanner>
      <section className="contact">
        <p>You can have chat with us through this platforms.</p>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="https://wa.me/+918810995424"
              target="__blank"
              rel="noreferrer noopener"
            >
              <BsWhatsapp />
            </a>
            <a
              href="mailto:raahfoundationup@gmail.com"
              target="__blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a href="http://m.me/" target="__blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+918810995424"
              target="__blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
            {/* Add other contacts .. */}
            {/* Add other contacts .. */}
            {/* Add other contacts .. */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
