import React from "react";
import Logo from "../../assets/Images/top-logo.svg";
import "../../components/Section1/Section1.scss";
import Carousel from "../../containers/Carousel/Carousel";
import "../../containers/Carousel/Carousel.scss";

const Section1 = () => {
  return (
    <div className="cont-header">
      <section id="Section1"></section>
      <div className="cont-nav">
        <div className="flex-row container">
          <img src={Logo} alt="logo 25Watts" className="top-logo" />
          <nav>
            <li>
              <ul className="nav-ul flex-row">
                <a href="../Section1/Section1.js/#Section1">Home</a>
                <a href="../Section2/Section2.js/#Section2">About</a>
                <a href="../Section3/Section3.js/#Section3">Products</a>
                <a href="../Section4/Section4.js/#Section4">Services</a>
                <a href="../Contact/Contact.js/#Contact">Contact</a>
              </ul>
            </li>
          </nav>
        </div>
      </div>
      <h1 className="flex-flow container h1-header">
        Sed ut perspiciatis <br /> unde omnis iste natus
      </h1>
      <h3>
        Sed ut perspiciatis unde omnis iste natus error
        <br /> sit voluptatem accusantium doloremque.
      </h3>
      <a href="../Section4/Section4.js/#Section4">
        <input type="button" value="Read More" className="button" />
      </a>
        <Carousel />
    </div>
  );
};

export default Section1;
