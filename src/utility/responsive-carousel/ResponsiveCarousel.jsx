import React from "react";
import "./ResponsiveCarousel.scss";
import Carousel from "react-bootstrap/Carousel";

import s1 from "../../assets/images/s1.jpg";
import s2 from "../../assets/images/s2.jpg";

function ResponsiveCarousel() {
  return (
    <>
      <Carousel data-bs-theme="dark" slide={true} pause="hover">
        <Carousel.Item>
          <img className="d-block w-100" src={s1} alt="First slide" />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={s2} alt="Second slide" />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ResponsiveCarousel;
