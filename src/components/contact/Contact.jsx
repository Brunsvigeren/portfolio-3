import React from "react";
import { GiKiwiBird } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="kontakt" className="container contact_container">
      <div className="section_header_container">
        <AiOutlineMail className="section_header_icon" />
        <h2 className="section_header">KONTAKT</h2>
        <div className="contact_content"></div>
      </div>
    </section>
  );
};

export default Contact;
