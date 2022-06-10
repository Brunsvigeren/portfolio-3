import React from "react";
import { GiKiwiBird } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import "./contact.css";

const Contact = () => {
  return (
    <section id="kontakt" className="container contact_container">
      <div className="section_header_container">
        <AiOutlineMail className="section_header_icon" />
        <h2 className="section_header">KONTAKT</h2>{" "}
      </div>
      <div className="contact_content">
        <div className="contact_paragraph">
          <p className="contact_paragraph_text">
            Er du interesseret i et samarbejde? Eller vil du bare gerne vide
            lidt mere?
            <br />
            <br />
            Send mig en besked via formularen eller direkte på mail
            xxxxxx.xxxx@gmail.com, og så vender jeg tilbage hurtigst muligt.
          </p>
        </div>
        <div className="contact_content_form">
          <form action="">
            <input
              type="text"
              name="first_name"
              placeholder="Fornavn"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Efternavn"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mailadresse"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Din besked"
              required
            ></textarea>
            <button type="submit" className="contact_button">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
