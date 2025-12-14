import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Achievements.css";

import ach1 from "../assets/ach1.jpeg";
import ach2 from "../assets/ach2.jpeg";
import ach3 from "../assets/ach3.jpeg";
import ach4 from "../assets/ach4.jpeg";
import ach5 from "../assets/ach5.jpeg";
import ach6 from "../assets/ach6.jpeg";

const achievementsData = [
  { img: ach1, desc: "Secured Rank 1 in Academic Year 2023-2024" },
  { img: ach2, desc: "Secured Thrid Prize in National Voter's Day 2024 Inland Letter Writing Competition" },
  { img: ach3, desc: "Presented a Research Article in a Global Conference" },
  { img: ach4, desc: "Secured 86th Rank in CodeQuezt Contest:DSA by Naukri Campus" },
  { img: ach5, desc: "Secured Thrid Prize in National Voter's Day 2024 Inland Letter Writing Competition" },
  { img: ach6, desc: "Secured Second prize in 'Minutes_to_Win' contest conducted by CSI branch" },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="achievements" className="ach-section">
      <h2 className="section-title">Achievements</h2>

      <Slider {...settings} className="ach-slider">
        {achievementsData.map((ach, index) => (
          <div key={index} className="ach-slide">
            <div
              className="ach-card-carousel"
              onClick={() => setSelectedImage(ach.img)}
            >
              <img src={ach.img} alt={`Achievement ${index + 1}`} />
            </div>
            <p className="ach-desc">{ach.desc}</p>
          </div>
        ))}
      </Slider>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default Achievements;
