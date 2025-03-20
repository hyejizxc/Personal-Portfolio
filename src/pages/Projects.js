// src/pages/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import todoImage from '../assets/todo-list.jpg';
import weatherImage from '../assets/weather-app.jpg';
import portfolioImage from '../assets/portfolio.jpg';


const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'To-Do List',
      description: 'A portfolio with a productivity tool for managing daily tasks and schedules.',
      category: 'web',
      image: todoImage,
      technologies: ['HTML', 'JavaScript', 'CSS'],
      link: 'https://jim-27.github.io/portfolio-to-do'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A weather forecasting application using OpenWeatherMap API.',
      category: 'mobile',
      image: weatherImage,
      technologies: ['Vite', 'React', 'CSS', 'HTML', 'JavaScript'],
      link: 'https://weathera-app-cyan.vercel.app/'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A simple (HTML, CSS) and responsive portfolio website showcasing About me and Hobbies.',
      category: 'web',
      image: portfolioImage,
      technologies: ['HTML', 'CSS'],
      link: 'https://jim-27.github.io/portfolio'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="filter-container">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'web' ? 'active' : ''} 
          onClick={() => setFilter('web')}
        >
          Web
        </button>
        <button 
          className={filter === 'mobile' ? 'active' : ''} 
          onClick={() => setFilter('mobile')}
        >
          Mobile
        </button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} className="project-img" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
