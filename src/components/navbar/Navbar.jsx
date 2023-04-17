import React, { useState } from "react";
import "./navbar.css";
import { links } from "../../utils/data";
import { Link, NavLink, useNavigate } from "react-router-dom"; // NavLink fro active prop
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const close = () => {
    navigate("..");
  };

  return (
    <nav>
      <div className="container nav__container">
        {/* LOGO astha */}
        <Link to="/" className="logo">
          <span className="name">Raah</span> Foundation
        </Link>
        {/* navLinks and btnDonate */}
        <ul className={`nav__links ${isShow ? "show" : "hide"}`}>
          {links.map(({ linkName, path }, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsShow((prev) => !prev)}
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
        {/* burger icon for smallDevices */}
        <button className="nav-btn" onClick={() => setIsShow((prev) => !prev)}>
          {isShow ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
        {/*  */}
      </div>
    </nav>
  );
};

export default Navbar;
