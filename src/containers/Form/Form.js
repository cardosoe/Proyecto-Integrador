import React, {useState} from "react";
import Globos from "../../assets/Images/contact-image.png";
import {Form, Alert} from 'react-bootstrap'
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

          setTimeout(()=>{setShowAlert(false)}, 3000)
        } else {
          setError(true)
        }
      } catch(err) {
        setShowAlert(true)
        setError(true)
      }
    }
  }

  const handleOnChange = (e) => {
    // Vamos a crear nuestro objeto formData
    // {
    //   name: 'Franco'
    //   email: "franco@gmail.com"
    //   phone: 346787666656
    //   message: 'sadasdasdasd asd asd '
    // }
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
        { showAlert 
          ? error 
            ? <Alert variant={'danger'}>Hubo un error al enviar el email </Alert> 
            : <Alert variant={'success'}>Email enviado con éxito</Alert> 
          : null }
    </div>
  );
};

  export default ContactForm;
