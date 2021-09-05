import React from "react";
import Globos from "../../assets/Images/contact-image.png";
import Form from 'react-bootstrap/Form'
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
    <div className="Form">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
           </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="tel" placeholder="Phone" />
           </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
        </Form>
    </div>
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
