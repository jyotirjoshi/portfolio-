import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-professional">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mithilesh Khandwala</h3>
            <p>Student Researcher | Youth Leader | Scholar</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#achievements">Achievements</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Mithilesh Khandwala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;