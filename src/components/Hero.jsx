import React from "react";
import { ReactTyped } from "react-typed";
import "../styles/Hero.css";
import profilePic from "../assets/profile.jpg";
import resumeImg from "../assets/resume.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">

        <div className="hero-text">
          <h1>Hello, I'm <span className="neon-text">Madhumitha S</span></h1>

          <h2>
            I'm a{" "}
            <ReactTyped
              strings={[
                "Pre-Final Year IT Student",
                "Software Developer",
                "AI Enthusiast",
                "Full-Stack Developer"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>

          <p>Building innovative projects and exploring emerging technologies 🚀</p>

          {/* Buttons Container */}
          <div className="hero-buttons">
            <a href={resumeImg} target="_blank" rel="noopener noreferrer">
              <button className="cta-button blue">View My Resume</button>
            </a>

            <a href={resumeImg} download="Madhumitha_Resume.jpg">
              <button className="cta-button blue">Download Resume</button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profilePic} alt="Madhumitha S" className="profile-pic" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
