import React from "react";
import "./socials.css";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <div className="header_socials">
        <a
          href="https://www.linkedin.com/in/stinebraunschweigandersen/"
          target="_blank"
        >
          <FaLinkedin className="header_social_linkedin" />
        </a>
        <a href="https://github.com/Brunsvigeren" target="_blank">
          <FaGithub className="header_social_github" />
        </a>
        <a href="https://www.instagram.com/stinebraunschweig/" target="_blank">
          <FaInstagram className="header_social_instagram" />
        </a>
        <a href="https://twitter.com/stinebraun" target="_blank">
          <FaTwitter className="header_social_twitter" />
        </a>
      </div>
      <div className="fixed-email">xxx.dddddd@gmail.com</div>
    </div>
  );
};

export default Socials;
