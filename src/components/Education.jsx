import React from "react";
import "../styles/Education.css";

const educationData = [
  {
    year: "2023 - Present",
    title: "B.Tech in Information Technology",
    institution: "National Engineering College, Kovilpatti",
    description: "Currently a Pre-Final year student in B.Tech-IT, exploring software development, AI, and full-stack technologies.",
    grade:"CGPA: 9.43"
  },
  {
    year: "2022 - 2023",
    title: "HSC Second Year",
    institution: "K.C.A.D.Chidambaram.Gnanagiri.Matriculation.Higher Secondary School, Sattur",
    description: "Completed second-year Higher Secondary with specialization in Computer Science.",
    grade:"Percentage: 94.83"
  },
  {
    year: "2021 - 2022",
    title: "HSC First Year",
    institution: "K.C.A.D.Chidambaram.Gnanagiri.Matriculation.Higher Secondary School, Sattur",
    description: "Completed first-year Higher Secondary with a strong foundation in Computer Science subjects.",
    grade:"Percentage: 90.83"
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.title}</h3>
            <span className="education-year">{edu.year}</span>
            <h4>{edu.institution}</h4>
            <p>{edu.description}</p>
            <p className="grade">{edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
