import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-card">
        <h3>Connect with me</h3>

        <p className="contact-email">
          <FaEnvelope className="icon" /> madhueswarya@gmail.com
        </p>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/madhumithas34"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SMadhumitha-123"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:madhueswarya@gmail.com"
            className="social-link"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
