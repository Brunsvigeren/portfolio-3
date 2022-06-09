import React from "react";
import "./footer.css";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container footer_container">
      <div className="footer_content">
        <div className="footer_icons">
          <a
            href="https://www.linkedin.com/in/stinebraunschweigandersen/"
            target="_blank"
          >
            <FaLinkedin className="header_social_linkedin footer_icon" />
          </a>
          <a href="https://github.com/Brunsvigeren" target="_blank">
            <FaGithub className="header_social_github footer_icon" />
          </a>
          <a
            href="https://www.instagram.com/stinebraunschweig/"
            target="_blank"
          >
            <FaInstagram className="header_social_instagram footer_icon" />
          </a>
          <a href="https://twitter.com/stinebraun" target="_blank">
            <FaTwitter className="header_social_twitter footer_icon" />
          </a>
        </div>
        <div className="footer_paragraph">
          © V.1.0 Designet og lavet af Stine Braunschweig Andersen 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
