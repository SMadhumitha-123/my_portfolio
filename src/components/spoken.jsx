import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Certificates.css";

import cert13 from "../assets/cert13.jpeg";
import cert14 from "../assets/cert14.jpeg";
import cert15 from "../assets/cert15.jpeg";
import cert16 from "../assets/cert16.jpeg";
import cert17 from "../assets/cert17.jpeg";
import cert18 from "../assets/cert18.jpeg";


const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
  };

  const certificateImages = [cert13, cert14, cert15, cert16,cert17,cert18];

  return (
    <section id="certificates" className="cert-section">
      <h2 className="section-title">Spoken TutorialCertifications(IIT Bombay)</h2>

      <div className="carousel-container">
        <Slider {...settings}>
          {certificateImages.map((img, index) => (
            <div key={index} className="slide-item">
              <img src={img} alt={`Certificate ${index + 1}`} className="cert-image" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certificates;
