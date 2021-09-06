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
            <h3>Sed ut persipiciatis <br /> unde omnis First slide</h3>
            <p class="carousel_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImage2" src={Slideshow2} alt="Second slide" />
          <Carousel.Caption>
<<<<<<< HEAD
            <h3>Sed ut persipiciatis <br />unde Second slide</h3>
=======
            <h3>Sed ut persipiciatis <br />unde omnis Second slide</h3>
>>>>>>> 706c6470f712fb33841f9f9f7b020d2683cdfb4d
            <p class="carousel_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImage3" src={Slideshow3} alt="Third slide" />
          <Carousel.Caption>
<<<<<<< HEAD
            <h3>Sed ut persipiciatis<br /> unde Third slide</h3>
=======
            <h3>Sed ut persipiciatis<br /> unde omnis Third slide</h3>
>>>>>>> 706c6470f712fb33841f9f9f7b020d2683cdfb4d
            <p class="carousel_text">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slideshow;
