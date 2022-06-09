import React from "react";
import "./what_i_do.css";
import { BsLightbulb, BsFillPatchCheckFill } from "react-icons/bs";

const What_i_do = () => {
  return (
    <section id="hvad_jeg_laver" className="container what_i_do_container">
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
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Admnistration</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Koordination</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Ad hoc</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Organisering</p>
            </div>
          </div>
        </div>
        <div className="card wid">
          <h4 className="card_title">Medieproduktion</h4>
          <div className="card_content">
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Tilrettelæggelse</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Afvikling</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Podcast & radio</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Live tv & video</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Journalistik</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Research</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Digitalt fokus</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Sociale medier</p>
            </div>
          </div>
        </div>
        <div className="card wid">
          <h4 className="card_title">Værktøjer</h4>
          <div className="card_content">
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">CMS & Works OS</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Google & Office</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Slack</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">HTML & CSS</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Basis JS & React</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Hindenburg</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Premiere Pro</p>
            </div>
            <div className="card_content_inner">
              <BsFillPatchCheckFill className="card_content_inner_icon" />
              <p className="card_paragraph">Omny Studio</p>
            </div>
          </div>
        </div>

        <div className="card wid last_card">
          <div className="last_card_paragraph">
            "Jeg er drevet af at forløse gode ideer, har et stort drive, en
            uendelig nysgerrighed, et konstruktivt blik og en stor kærlighed til
            gode fortællinger."
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default What_i_do;
