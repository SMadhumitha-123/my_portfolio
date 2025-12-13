import React from "react";
import { 
  FaPython, 
  FaJava, 
  FaJsSquare, 
  FaReact, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt 
} from "react-icons/fa";
import { SiC, SiCplusplus, SiMysql, SiMongodb, SiDjango} from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Django", icon: <SiDjango /> },
  
{ name: "MERN Stack", icon: <FaReact /> }

];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
