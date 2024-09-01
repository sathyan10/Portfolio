import React from "react";
import "./Navbar.css";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFolderOpen,
  FaFileAlt,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  // Function to close the menu when an item is clicked
  const closeMenu = () => {
    document.getElementById("toggle").checked = false;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          SM
        </a>

        <input type="checkbox" id="toggle" className="toggle-checkbox" />
        <label htmlFor="toggle" className="toggle-button">
          <FaBars className="fa-bars" />
          <FaTimes className="fa-times" />
        </label>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>
              <FaHome /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>
              <FaUser /> About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={closeMenu}>
              <FaLaptopCode /> Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              <FaFolderOpen /> Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link" onClick={closeMenu}>
              <FaFileAlt /> Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              <FaEnvelope /> Contact
            </a>
          </li>
          <li className="nav-item github-icon">
            <a
              href="https://github.com/sathyan10"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={closeMenu}
            >
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
