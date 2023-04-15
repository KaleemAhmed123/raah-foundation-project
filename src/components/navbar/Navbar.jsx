import React, { useState } from "react";
import "./navbar.css";
import { links } from "../../utils/data";
import { Link, NavLink } from "react-router-dom"; // NavLink fro active prop
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <span className="name">Astha</span> Foundation
        </Link>
        <ul className={`nav__links ${isShow ? "show" : "hide"}`}>
          {links.map(({ linkName, path }, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {linkName}
                </NavLink>
              </li>
            );
          })}
          <div className="nav-donateBtn">
            <NavLink to="/donate">Donate</NavLink>
          </div>
        </ul>
        <button className="nav-btn" onClick={() => setIsShow(!isShow)}>
          {isShow ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
