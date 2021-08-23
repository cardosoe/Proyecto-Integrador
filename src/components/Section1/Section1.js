import React from "react";
import Logo from "../../assets/Images/top-logo.svg";
import "../../components/Section1/Section1.scss";
import Carousel from "../../containers/Carousel/Carousel";
import "../../containers/Carousel/Carousel.scss";
import { Link, animateScroll as scroll } from "react-scroll";

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
                <ul><Link
                  activeClass="active"
                  to="Section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Home</Link></ul>
                <ul><Link
                  activeClass="active"
                  to="Section2"
                  spy={true}
                  smooth={true}
                  offset={-230}
                  duration={500}>About</Link></ul>
                <ul><Link
                  activeClass="active"
                  to="Section3"
                  spy={true}
                  smooth={true}
                  offset={120}
                  duration={500}>Products</Link></ul>
                <ul><Link
                  to="Section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Services</Link></ul>
                <ul><Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Contact</Link></ul>
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
      <a> <Link
        to="Section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <input type="button" value="Read More" className="button" /></Link>
      </a >
      <Carousel />
    </div >
  );
};

export default Section1;
