import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hello! I’m <span className="highlight">Madhumitha S</span>, a 
          <span className="highlight"> pre-final year B.Tech IT student</span> at National Engineering College, Kovilpatti,
          currently interning at <span className="highlight">Mistral Technobation Center</span>. 
          I am passionate about exploring diverse areas of IT—from software development to AI-driven solutions—where every project is an opportunity to solve problems creatively and deliver practical results.
        </p>
        <p>
          I have hands-on experience in <span className="highlight">Python, Java, C++</span>, as well as web development using 
          <span className="highlight"> HTML, CSS, JavaScript</span>, and frameworks like <span className="highlight">React, Django, Spring Boot</span>. 
          I enjoy taking on challenges that combine logic and creativity 🚀.
        </p>
        <p>
          I value <span className="highlight">communication and collaboration</span> 🤝, whether presenting ideas, contributing in teams, or simplifying complex technical concepts. 
          I strive to create meaningful connections and make a positive impact in every project.
        </p>
      </div>
    </section>
  );
};

export default About;
