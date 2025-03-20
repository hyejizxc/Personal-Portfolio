// src/pages/About.js
import React from 'react';
import './About.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import profilePic from '../assets/Jim.png'; // Siguraduhin na tama ang path

const About = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
    { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
    { name: "React", icon: <FaReact className="skill-icon react" /> },
    { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
    { name: "SQL", icon: <FaDatabase className="skill-icon sql" /> },
  ];

  return (
    <div className="about-container">
      <h1>About me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>
        <div className="about-text">
          <h2>Who I Am</h2>
          <p>
          I am a third-year BSIT student and an aspiring front-end developer. 
          Passionate about creating intuitive and efficient web applications, 
          I am currently honing my skills in front-end technologies.
          </p>
          <p>
          My journey in web development started in college, and 
          I am passionate about creating interactive and user-friendly web experiences.
          </p>
          
          <h2>My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                {skill.icon}
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;