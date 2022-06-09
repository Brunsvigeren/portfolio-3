import React from "react";
import "./about.css";
import { GiKiwiBird } from "react-icons/gi";

const About = () => {
  return (
    <section id="om" className="container about_container">
      <div className="section_header_container">
        <GiKiwiBird className="section_header_icon" />
        <h2 className="section_header">OM MIG</h2>
      </div>
      <div className="about_content_wrapper">
        <p className="about_profile_text">
          Mit navn er Stine Braunschweig Andersen, jeg er{" "}
          <span className="highlight_word">humanist</span> med +6 års erfaring
          indenfor medier, medieproduktion, projektledelse, journalistik,
          formidling og udviklingsarbejde.
          <br />
          <br />
          Jeg bærer - sagt med andre ord - mange hatte, og jeg betragter mig
          selv som en{" "}
          <span className="highlight_word">specialiseret generalist</span> med
          ekspertise i at{" "}
          <span className="highlight_word">få ting til at ske</span>, stærke
          evner inden for digital medieproduktion og teknisk snilde. Jeg er{" "}
          <span className="highlight_word">nysgerrig</span>, lærer hurtigt og
          tilgår enhver ny udfordring som en mulighed for at lære noget nyt.
          <br />
          <br />
          Af projekter og arbejde, jeg har beskæftiget mig med, kan blandt andet
          nævnes{" "}
          <span className="highlight_word">podcast- og radioproduktion</span>,
          tv-produktion, journalistik,{" "}
          <span className="highlight_word">EM 2020</span>, tværgående og
          strategiske projekter, marketing og kampagner,{" "}
          <span className="highlight_word">digitale udviklingsprojekter</span>,
          drift og eksternt samarbejde.
        </p>
        <img
          src="./images/picture_me.jpg"
          className="profile_picture"
          alt="profile_picture"
        />
      </div>
    </section>
  );
};

export default About;
