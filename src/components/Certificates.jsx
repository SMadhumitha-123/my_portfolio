import React, { useState } from "react";
import "../styles/Certificates.css";

// Logos
import nptelLogo from "../assets/nptel-logo.jpg";
import spokenLogo from "../assets/spoken-logo.jpg";
import sl from "../assets/sl.jpg";
import cisco from "../assets/cisco.jpg";
import ibm from "../assets/ibm.jpg";
import guvi from "../assets/guvi.jpg";
import sololearn from "../assets/sololearn.jpg";
import infosys from "../assets/infosys.jpg";
import gl from "../assets/gl.jpg";
import mongo from "../assets/mongo.jpg";

// Certificates
import cert19 from "../assets/cert19.jpeg";
import cert20 from "../assets/cert20.jpeg";
import cert21 from "../assets/cert21.jpeg";
import cert22 from "../assets/cert22.jpeg";
import cert23 from "../assets/cert23.jpeg";
import cert24 from "../assets/cert24.jpeg";


import cert13 from "../assets/cert13.jpeg";
import cert14 from "../assets/cert14.jpeg";
import cert15 from "../assets/cert15.jpeg";
import cert16 from "../assets/cert16.jpeg";
import cert17 from "../assets/cert17.jpeg";
import cert18 from "../assets/cert18.jpeg";

// Add remaining certificate imports here
import cert1 from "../assets/cert1.jpeg";
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpeg";
import cert4 from "../assets/cert4.jpeg";
import cert5 from "../assets/cert5.jpeg";
import cert6 from "../assets/cert6.jpeg";
import cert7 from "../assets/cert7.jpeg";
import cert8 from "../assets/cert8.jpeg";
import cert9 from "../assets/cert9.jpeg";
import cert10 from "../assets/cert10.jpeg";
import cert11 from "../assets/cert11.jpeg";
import cert12 from "../assets/cert12.jpeg";

const providers = [
  {
    name: "NPTEL",
    logo: nptelLogo,
    certificates: [cert19, cert20,cert21,cert22,cert23,cert24],
  },
  {
    name: "Spoken Tutorial",
    logo: spokenLogo,
    certificates: [cert13, cert14,cert15,cert16,cert17,cert18],
  },
  {
    name: "Simplilearn",
    logo: sl,
    certificates: [cert1,cert2,cert4],
  },
  {
    name: "MongoDB",
    logo: mongo,
    certificates: [cert5],
  },
  {
    name: "Cisco",
    logo: cisco,
    certificates: [cert8],
  },
  {
    name: "IBM",
    logo: ibm,
    certificates: [cert12],
  },
  
  {
    name: "Infosys Springboard",
    logo: infosys,
    certificates: [cert6,cert7],
  },
  {
    name: "GUVI",
    logo: guvi,
    certificates: [cert10],
  },
  {
    name: "Great Learning",
    logo: gl,
    certificates: [cert3],
  },
  {
    name: "MongoDB",
    logo: mongo,
    certificates: [cert5],
  },
  
];

const Certificates = () => {
  const [modalData, setModalData] = useState({
    open: false,
    index: 0,
    certificates: [],
  });

  const openModal = (certificates) => {
    if (certificates.length === 0) return; // skip if no certificates
    setModalData({ open: true, index: 0, certificates });
  };

  const closeModal = () =>
    setModalData({ open: false, index: 0, certificates: [] });

  const prevCert = () => {
    setModalData((prev) => ({
      ...prev,
      index:
        prev.index === 0 ? prev.certificates.length - 1 : prev.index - 1,
    }));
  };

  const nextCert = () => {
    setModalData((prev) => ({
      ...prev,
      index:
        prev.index === prev.certificates.length - 1 ? 0 : prev.index + 1,
    }));
  };

  return (
    <section id="certificates" className="cert-section">
      <h2 className="section-title">Certifications</h2>

      <div className="cert-grid">
        {providers.map((provider, idx) => (
          <div
            className="logo-item"
            key={idx}
            onClick={() => openModal(provider.certificates)}
          >
            <img
              src={provider.logo}
              alt={provider.name}
              className="cert-logo"
            />
            <p>{provider.name}</p>
          </div>
        ))}
      </div>

      {modalData.open && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <span className="arrow left" onClick={prevCert}>
              &#10094;
            </span>
            <img
              src={modalData.certificates[modalData.index]}
              alt={`Certificate ${modalData.index + 1}`}
              className="modal-content"
            />
            <span className="arrow right" onClick={nextCert}>
              &#10095;
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
