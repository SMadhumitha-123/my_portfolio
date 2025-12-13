import React, { useState } from "react";
import "../styles/Certificates.css";

import nptelLogo from "../assets/nptel-logo.jpg";
import spokenLogo from "../assets/spoken-logo.jpg";

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

const nptelCertificates = [cert19, cert20, cert21, cert22, cert23, cert24];
const spokenCertificates = [cert13, cert14, cert15, cert16, cert17, cert18];

const Certificates = () => {
  const [modalData, setModalData] = useState({ open: false, index: 0, type: "" });

  const openModal = (type) => {
    setModalData({ open: true, index: 0, type });
  };

  const closeModal = () => setModalData({ open: false, index: 0, type: "" });

  const prevCert = () => {
    setModalData((prev) => {
      const list = prev.type === "nptel" ? nptelCertificates : spokenCertificates;
      const newIndex = prev.index === 0 ? list.length - 1 : prev.index - 1;
      return { ...prev, index: newIndex };
    });
  };

  const nextCert = () => {
    setModalData((prev) => {
      const list = prev.type === "nptel" ? nptelCertificates : spokenCertificates;
      const newIndex = prev.index === list.length - 1 ? 0 : prev.index + 1;
      return { ...prev, index: newIndex };
    });
  };

  const getCurrentImage = () => {
    const list = modalData.type === "nptel" ? nptelCertificates : spokenCertificates;
    return list[modalData.index];
  };

  return (
    <section id="certificates" className="cert-section">
      <h2 className="section-title">Certifications</h2>

      <div className="logos-container">
        <div className="logo-item">
          <img
            src={nptelLogo}
            alt="NPTEL Logo"
            className="cert-logo"
            onClick={() => openModal("nptel")}
          />
          <p>NPTEL</p>
        </div>

        <div className="logo-item">
          <img
            src={spokenLogo}
            alt="Spoken Tutorial Logo"
            className="cert-logo"
            onClick={() => openModal("spoken")}
          />
          <p>Spoken Tutorial (IIT Bombay)</p>
        </div>
      </div>

      {modalData.open && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <span className="arrow left" onClick={prevCert}>
            &#10094;
          </span>
          <img src={getCurrentImage()} alt="Certificate" className="modal-content" />
          <span className="arrow right" onClick={nextCert}>
            &#10095;
          </span>
        </div>
      )}
    </section>
  );
};

export default Certificates;
