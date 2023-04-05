import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/1567812.jpg";
import img2 from "../Assets/4.jpg";
import img3 from "../Assets/6.webp";
import img4 from "../Assets/1657894.jpg";
function Services() {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2500}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="img1" />
          <p className="legend">Design and Development</p>
        </div>
        <div>
          <img src={img2} alt="img2" />
          <p className="legend">Full Stack Development</p>
        </div>
        <div>
          <img src={img3} alt="img2" />
          <p className="legend">Java Development</p>
        </div>
        <div>
          <img src={img4} alt="img2" />
          <p className="legend">Web Development</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
