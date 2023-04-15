import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logoM.png";
import { links } from "../../utils/data";
import { Link, NavLink } from "react-router-dom"; // NavLink fro active prop
import { GoThreeBars } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="container nav_container">
      <Link to="/" className="logo">
        <img src={Logo} alt="Nav Logo" />
      </Link>
      <ul className="nav__links">
        {links.map(({ linkName, path }, idx) => {
          return (
            <li>
              <NavLink to={path}>{linkName}</NavLink>
            </li>
          );
        })}
      </ul>
      <button className="nav_toggle-btn">
        <GoThreeBars />
      </button>
    </div>
  );
};

export default Navbar;
