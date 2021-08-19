import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slideshow1 from "../../assets/Images/slider-1.png";
import Slideshow2 from "../../assets/Images/slide2.jpg";
import Slideshow3 from "../../assets/Images/slide3.jpg";

const Slideshow = () => {
  return (
    <div className="Slideshow">
      <Carousel>
        <Carousel.Item>
          <img className="carouselImage1" src={Slideshow1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImage2" src={Slideshow2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImage3" src={Slideshow3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slideshow;
