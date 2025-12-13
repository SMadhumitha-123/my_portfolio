import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const sections = [
  { name: "Home", to: "hero", color: "#7C7CFF" },
  { name: "About", to: "about", color: "#00FFD1" },
  { name: "Education", to: "education", color: "#FFAE00" },
  { name: "Skills", to: "skills", color: "#00E5FF" },
  { name: "Projects", to: "projects", color: "#7CFF00" },
  { name: "Achievements", to: "achievements", color: "#FF5EDF" },
  { name: "Certifications", to: "certificates", color: "#FF8C42" },
  { name: "Contact", to: "contact", color: "#FF4C4C" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll-based shrink + blur */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Accent color change per section */
  const handleSetActive = (color) => {
    document.documentElement.style.setProperty("--accent", color);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO / NAME */}
      <div className="logo">
        <span className="logo-main">Madhumitha</span>
        <span className="logo-highlight"> S</span>
      </div>

      {/* HAMBURGER (MOBILE) */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {sections.map((item, index) => (
          <li key={index} className="magnetic">
            <Link
              to={item.to}
              smooth={true}
              duration={600}
              spy={true}
              offset={-100}
              activeClass="active"
              onSetActive={() => handleSetActive(item.color)}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
              <span className="nav-underline" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
