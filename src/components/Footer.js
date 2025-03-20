import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // Tamang import para sa TikTok
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Jim-27" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} /> GitHub
          </a>
          <a href="https://instagram.com/jimmeisterrr" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} /> Instagram
          </a>
          <a href="https://www.tiktok.com/@jimmeisterrr?_t=ZS-8uqA8Z0OcMy&_r=1" target="_blank" rel="noopener noreferrer">
            <SiTiktok size={24} /> TikTok
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Portfolio Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
