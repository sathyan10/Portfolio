import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import icons
import './Projects.css';

// Import images
import RecipeImage from '../Assets/Projects/Recipe.png';
import CRUDImage from '../Assets/Projects/CRUD.png';
import PortfolioImage from '../Assets/Projects/PORTFOLIO.png';

const techIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  ReactJS: <FaReact />,
  NodeJs: <FaNodeJs />,
  MySQL: <FaDatabase />
};

const projects = [
  {
    title: 'Restaurant Website',
    description: 'Explore delicious recipes by category and easily contact us, all built with just HTML and CSS.',
    image: RecipeImage,
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/sathyan10/Recipe-Website-Using-HTML-And-CSS-.git',
    year: 2024
  },
  {
    title: 'Learning Management System',
    description: 'Create a book management system using React.js, MySQL, and CSS, allowing effortless addition, update, search, and deletion of books.',
    image: CRUDImage,
    stack: ['ReactJS', 'NodeJs', 'MySQL', 'CSS'],
    sourceCode: 'https://github.com/sathyan10/Learning-Management-System-LMS-.git',
    year: 2024
  },
  {
    title: 'Portfolio',
    description: 'My portfolio highlights my technical skills and projects, complemented by hobbies and a comprehensive resume.',
    image: PortfolioImage,
    stack: ['ReactJS', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/sathyan10/Portfolio.git',
    year: 2024
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Works</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.title} screenshot`} />
            <div className="project-info">
              <h3>{project.title} ({project.year})</h3>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="tech-icon">
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>
              <div className="buttons">
                <a href={project.sourceCode} className="btn">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
