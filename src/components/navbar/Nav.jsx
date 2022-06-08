import React from "react";
import { useState, useEffect } from "react";
import "./nav.css";
import { GiSadCrab } from "react-icons/gi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="header">
      <nav className="container navbar">
        <a className="header_icon" href="#">
          <GiSadCrab />
        </a>

        <button onClick={handleToggle}>
          {navbarOpen ? (
            <FaRegHeart className="nav_menu_btn closing_icon" />
          ) : (
            <FaHeart className="nav_menu_btn hamburger_icon" />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : " "}`}>
          <li>
            <a onClick={() => closeMenu()} className="nav_link" href="#about">
              OM MIG
            </a>
          </li>
          <li>
            <a
              onClick={() => closeMenu()}
              className="nav_link"
              href="#what_i_do"
            >
              HVAD JEG LAVER
            </a>
          </li>
          <li>
            <a onClick={() => closeMenu()} className="nav_link" href="contact">
              KONTAKT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
