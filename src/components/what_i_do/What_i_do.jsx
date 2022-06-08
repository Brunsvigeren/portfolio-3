import React from "react";
import "./what_i_do.css";
import { BsLightbulb, BsFillPatchCheckFill } from "react-icons/bs";

const What_i_do = () => {
  return (
    <section id="what_i_do" className="container what_i_do_container">
      <div className="section_header_container">
        <BsLightbulb className="section_header_icon" />
        <h2 className="section_header">HVAD JEG LAVER</h2>
      </div>
      <div className="cards wid">
        <div className="card wid">
          <h4 className="card_title">Projektledelse</h4>
          <div className="card_content">
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Planlægning</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Tidsstyring</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Kommunikation</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Produktionsstyring</p>
            </div>
          </div>
        </div>
        <div className="card wid">
          <h4 className="card_title">Medieproduktion</h4>
        </div>
        <div className="card wid">
          <h4 className="card_title">Digital udvikling</h4>
        </div>
      </div>
    </section>
  );
};

export default What_i_do;
