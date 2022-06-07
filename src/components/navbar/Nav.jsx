import React from "react";
import { useState, useEffect } from "react";
import "./nav.css";
import { GiSadCrab } from "react-icons/gi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header className={`header ${show && "hidden"}`}>
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
            <a onClick={() => closeMenu()} className="nav_link">
              ABOUT
            </a>
          </li>
          <li>
            <a onClick={() => closeMenu()} className="nav_link">
              WHAT I DO
            </a>
          </li>
          <li>
            <a onClick={() => closeMenu()} className="nav_link">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
