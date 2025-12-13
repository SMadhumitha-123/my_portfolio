import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css"; // ✅ correct

const Footer = () => {
  return (
    <footer className="footer-section">
      <p>© {new Date().getFullYear()} Madhumitha S. All Rights Reserved.</p>
      
    </footer>
  );
};

export default Footer;
