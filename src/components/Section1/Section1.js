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
        <input type="button" value="Read More" className="button" />
        <Carousel />
    </div>
  );
};

export default Section1;
