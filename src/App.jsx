import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
//import Nptel from "./components/nptel";
//import Spoken from "./components/spoken";
import Achievements from "./components/achievements";
import ChatBot from "./components/ChatBot";
import Hobby from "./components/Hobby";

import './index.css'   // ← THIS IS REQUIRED !!!


import "./styles/App.css"; // main App CSS

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChatBot />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
            <Achievements />
<Hobby />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
