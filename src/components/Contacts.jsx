// src/components/Contact.jsx
import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faInstagram,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtext">
          Ready to bring your ideas to life or collaborate on something amazing? I’m just a message away.
        </p>

        {/* Contact info row */}
        <div className="contact-info-row">
          <div className="info-card">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <h3>Address</h3>
            <p>33St Al Satwa, Dubai, UAE</p>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <h3>Phone</h3>
            <p><a href="tel:+971583069321">+971 58 306 9321</a></p>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h3>Email</h3>
            <p><a href="mailto:aderogriffins254@gmail.com">aderogriffins254@gmail.com</a></p>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <h3>Website</h3>
            <p><a href="https://www.linkedin.com/in/griffins-adero-a07100184/">griffadero.dev</a></p>
          </div>
        </div>

        {/* Contact form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="social-section">
          <p className="social-text">Follow my socials to support and promote my work:</p>
          <div className="social-icons">
            <a href="https://wa.me/971583069321" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp" />
            </a>
            <a href="https://www.instagram.com/griffin_adero/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
            </a>
            <a href="https://www.linkedin.com/in/griffins-adero-a07100184//" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
