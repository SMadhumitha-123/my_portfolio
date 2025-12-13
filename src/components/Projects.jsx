import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Projects.css"; // ✅ correct

const projects = [
  {
    title: "Multilingual Speech App",
    description: "Text-to-Speech & Speech-to-Text with bot functionality.",
    tech: "React, Python, Streamlit",
    github: "#",
    demo: "#",
  },
  {
    title: "Online Bus Ticket Booking System",
    description: "Built using Java Spring Boot, MySQL, HTML, CSS, JS.",
    tech: "Java, Spring Boot, MySQL, HTML/CSS/JS",
    github: "#",
    demo: "#",
  },
  {
    title: "Online Food Ordering System (Web)",
    description: "User-friendly web app for ordering food.",
    tech: "HTML, CSS, JS",
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Classroom Management System",
    description: "Web-based system for classroom administration.",
    tech: "HTML, CSS, JS",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Code Snippet Generator",
    description: "Python & Tkinter app, functions like ChatGPT to generate code snippets.",
    tech: "Python, Tkinter",
    github: "#",
    demo: "#",
  },
  {
    title: "Console Food Ordering System",
    description: "C++ console application for food ordering.",
    tech: "C++",
    github: "#",
    demo: "#",
  },
  {
    title: "Online Job Portal System",
    description: "Django-based platform for job listings and applications.",
    tech: "Django, HTML, CSS, JS",
    github: "#",
    demo: "#",
  },
  {
    title: "Online Movie Ticket Booking System",
    description: "Django app for browsing movies, booking tickets, and managing shows.",
    tech: "Django, HTML, CSS, JS",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
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
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
