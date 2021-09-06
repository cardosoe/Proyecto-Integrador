import React from "react";
import Globos from "../../assets/Images/contact-image.png";
import "../Form/Form.scss";

const ContactForm = () => {
  return (
    <div className="container-contacto">
      <div className="RectanguloGrisContacto">
        <h2>
          <span style={{ color: "#343434" }}>
            Get in touch
            <br />
            <span style={{ color: "#e0752f" }}>We are hiring!</span>
          </span>
        </h2>
        <input type="text" placeholder="Name" className="Name" />
        <input type="email" placeholder="Email" className="Email" />
        <input type="tel" placeholder="Phone" className="Phone" />
        {
          <input
            type="text"
            placeholder="Message"
            className="Message"
            style={{ height: "6rem" }}
          />
        }
        <input type="button" value="Send" className="button2" />
        <img
          src={Globos}
          alt="Foto de globos aerostaticos volando"
          className="FotoGlobos"
        />
      </div>
    </div>
  );
};

export default ContactForm;
