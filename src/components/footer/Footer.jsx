import "./footer.css";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        {/* grid lev one */}
        <article>
          <Link to="/" className="logo" onClick={() => setIsShow(false)}>
            <span className="name">Raah</span> Foundation
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            doloremque!
          </p>
          <div className="footer__socials">
            <a
              href="https://youtube.com/"
              target="__blank"
              rel="noreferrer noopener"
            >
              <IoLogoYoutube />
            </a>
            <a
              href="https://facebook.com/"
              target="__blank"
              rel="noreferrer noopener"
            >
              <ImFacebook2 />
            </a>
            <a
              href="https://instagram.com/raahfoundation_up"
              target="__blank"
              rel="noreferrer noopener"
            >
              <RiInstagramLine />
            </a>
            <a
              href="https://whatsapp.com/"
              target="__blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </article>
        {/* lev two */}
        <article>
          <h4>Permalinks</h4>
          <Link to="/donate">Donate</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/join">Joins Us</Link>
        </article>
        {/* lev three */}
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact</Link>
          <Link to="/about">Support</Link>
        </article>
        {/* four */}
        <article>
          <h4>Devoloper</h4>
          <a
            href="https://www.linkedin.com/in/kaleem-ahmed-/"
            target="__blank"
            rel="noreferrer noopener"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/KaleemAhmed123"
            target="__blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
          <a
            href="https://kaleem.netlify.app"
            target="__blank"
            rel="noreferrer noopener"
          >
            Portfolio
          </a>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 Raah Foundation &copy; All right reserved </small>
      </div>
    </footer>
  );
};

export default Footer;

{
}
