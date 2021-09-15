import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slideshow1 from "../../assets/Images/section3-image1.png";
import Slideshow2 from "../../assets/Images/section3-image2.png";

const Slider = () => {
  return (
    <div className="Carousel2">
      <Carousel>
        <div className="carousel-item">
          <img className="carouselImage1" src={Slideshow1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="carouselImage2" src={Slideshow2} alt="Second slide" />
        </div>
      </Carousel>
    </div >
  );
};

export default Slider;
