import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact-footer">
      <div id="footer-left">
        <p>Designed and Developed by Sathyan</p>
      </div>
      <div id="footer-right">
        <p>Copyright © 2024 <span id="flogo">SM</span></p>
        <div id="footer-icons">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
