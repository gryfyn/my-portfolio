// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Griffins Geoffrey Adero. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
