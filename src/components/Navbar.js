import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="logo">
        <Link to="/">Jim Bagoncia</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li className="theme-toggle">
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;