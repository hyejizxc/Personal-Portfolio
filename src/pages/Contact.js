import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Clear form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>jimbagoncia@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+639391622088</p>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Antipolo City, PH</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/Jim-27" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} /> GitHub
            </a>
            <a href="https://instagram.com/jimmeisterrr" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} /> Instagram
            </a>
            <a href="https://www.tiktok.com/@jimmeisterrr" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} /> TikTok
            </a>
          </div>
        </div>
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible.</p>
              <button onClick={() => setSubmitted(false)}>Send another message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  rows="5"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
