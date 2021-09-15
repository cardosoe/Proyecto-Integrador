import React, { useState } from "react";
import Globos from "../../assets/Images/contact-image.png";
import { Form, Alert } from 'react-bootstrap'
import "../Form/Form.scss";
import { sendEmail } from "../../axios"

const ContactForm = () => {

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({})

  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(
      "form.checkValidity()", form.checkValidity()
    )

    setValidated(true);

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      let response

      try {
        response = await sendEmail(formData);

        if (response.status === 201) {
          setShowAlert(true)
          setError(false);

          form.reset()

          setValidated(false);

          setTimeout(() => { setShowAlert(false) }, 3000)
        } else {
          setError(true)
        }
      } catch (err) {
        setShowAlert(true)
        setError(true)
      }
    }
  }

  const handleOnChange = (e) => {


    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control onChange={handleOnChange}
                required type="text" placeholder="Name" name="name" required="required" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control onChange={handleOnChange} type="email" placeholder="Email" name="email" required="required" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control onChange={handleOnChange} type="tel" placeholder="Phone" name="phone" pattern="[0-9]{3}[0-9]{7}" required="required" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control onChange={handleOnChange} as="textarea" rows={3} placeholder="Please enter a message" name="message" required="required" />
            </Form.Group>
            <input type="submit" value="Send" className="button2" />
          </Form>
          {showAlert
            ? error
              ? <Alert variant={'danger'}>There was an error trying to send your message.</Alert>
              : <Alert variant={'success'}>Email sent successfully.</Alert>
            : null}

        </div>
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
