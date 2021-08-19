import React from "react";
import Ruta from "../../assets/Images/section4-image.png";
import "../Section4/Section4.scss";
import Accordion from "../accordion/accordion";

const Section4 = () => {
  return (
    <div>
      <section id="Section4"></section>
      <section className="RectanguloFotoRuta">
        <img src={Ruta} alt="Foto Ruta" className="FotoRuta" />
        <Accordion />
      </section>
    </div>
  );
};

export default Section4;
