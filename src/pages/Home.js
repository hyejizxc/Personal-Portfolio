import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const text = "Hi, I'm Jim and Welcome to My Portfolio";
    let i = 0;
    let typingTimeout;

    if (!title) return;

    title.textContent = ''; // Clear text when component mounts

    const typeWriter = () => {
      if (i <= text.length) {
        title.textContent = text.slice(0, i); // Use slice instead of +=
        i++;
        typingTimeout = setTimeout(typeWriter, 100);
      }
    };

    typeWriter();

    return () => {
      clearTimeout(typingTimeout); // Cleanup timeout on unmount
    };
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 ref={titleRef}></h1>
        <p className="subtitle">I'm a Student and Learning to be a Front End Developer.</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn primary-btn">View Projects</Link>
          <Link to="/contact" className="btn secondary-btn">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;