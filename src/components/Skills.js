import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiPostgresql } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'JAVA', level: '85%', icon: <FaJava />, color: '#5382a1', description: 'Experienced in building scalable applications.' },
  { name: 'PYTHON', level: '70%', icon: <FaPython />, color: '#3776AB', description: 'Proficient in scripting and automation.' },
  { name: 'HTML', level: '98%', icon: <FaHtml5 />, color: '#E34F26', description: 'Expert in creating semantic and accessible web pages.' },
  { name: 'CSS', level: '85%', icon: <FaCss3Alt />, color: '#1572B6', description: 'Skilled in designing responsive and modern UIs.' },
  { name: 'JAVASCRIPT', level: '80%', icon: <FaJs />, color: '#F7DF1E', description: 'Adept at adding interactivity to web applications.' },
  { name: 'MYSQL', level: '67%', icon: <SiMysql />, color: '#4479A1', description: 'Capable of managing relational databases.' },
  { name: 'POSTGRESQL', level: '65%', icon: <SiPostgresql />, color: '#336791', description: 'Experience with advanced database queries.' },
  { name: 'REACTJS', level: '70%', icon: <FaReact />, color: '#61DAFB', description: 'Proficient in building modern front-end applications.' },
  { name: 'NODEJS', level: '65%', icon: <FaNodeJs />, color: '#339933', description: 'Experience in building server-side applications.' },
];

const Skills = () => {
  return (
    <div className="skill-set">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon-background">
              {skill.icon}
            </div>
            <div className="circle" style={{ borderColor: skill.color }}>
              <span>{skill.level}</span>
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
