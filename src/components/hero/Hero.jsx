import React from "react";
import "./hero.css";
import {
  FaMicrophone,
  FaVideo,
  FaRegClipboard,
  FaHeadphonesAlt,
  FaCode,
} from "react-icons/fa";
import Socials from "../../components/socials/Socials";

const Hero = () => {
  return (
    <section className="container hero_container">
      <div className="header_main_wrapper">
        <h6 className="main_header_title_small">Jeg er Stine</h6>
        <h1 className="main_header_title">BRAUNSCHWEIG</h1>
      </div>
      <div className="hero_icons">
        <FaRegClipboard className="hero_icon" />
        <FaHeadphonesAlt className="hero_icon" />
        <FaVideo className="hero_icon" />
        <FaCode className="hero_icon" />
      </div>
      <Socials />
    </section>
  );
};

export default Hero;
