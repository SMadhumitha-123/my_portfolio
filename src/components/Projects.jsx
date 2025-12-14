import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "Multilingual Speech App",
    description: "Text-to-Speech & Speech-to-Text with bot functionality.",
    tech: "React, Python, Streamlit",
    image: "/images/speech.png",
    github: "#",
    demo: "/videos/NLP.mp4",
  },
  {
    title: "Online Food Ordering System (Web)",
    description: "User-friendly web app for ordering food.",
    tech: "HTML, CSS, JS",
    image: "/images/food.png",
    github: "#",
    demo: "/videos/OFOS.mp4",
  },
  {
    title: "Aaranya Arc - Zoo Website",
    description: "Django app for browsing movies, booking tickets, and managing shows.",
    tech: "Django, HTML, CSS, JS",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Code Snippet Generator (Team Project)",
    description:
      "Python & Tkinter app, functions like ChatGPT to generate code snippets.",
    tech: "Python, Tkinter",
    image: "/images/ai.png",
    github: "#",
    demo: "/videos/AI.mp4",
  },
  {
    title: "Online Bus Ticket Booking System (Team Project)",
    description:
      "Built using Java Spring Boot, MySQL, HTML, CSS, JS.",
    tech: "Java, Spring Boot, MySQL, HTML/CSS/JS",
    image: "/images/bus.png",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* 🖼 Project Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech}
            </p>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              {project.demo !== "#" && (
                <button
                  className="demo-btn"
                  onClick={() => setActiveVideo(project.demo)}
                >
                  <FaExternalLinkAlt />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🎥 VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="video-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="video-modal"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setActiveVideo(null)}
              >
                <FaTimes />
              </button>

              <video
                src={activeVideo}
                controls
                muted
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
