import React from 'react';
import './About.css';
import avatar from '../Assets/avatar.svg'; // Ensure this path is correct

const About = () => {
  return (
    <div className="introduce-myself">
      <div className="content">
        <h1 className="title">
          LET ME <span className="highlight">INTRODUCE</span> MYSELF
        </h1>
        <p>
          I fell in love with programming and I have at least learnt something, I think... 🤷‍♂️
        </p>
        <p>
          I am fluent in classics like <span className="highlight">Java, Javascript and Python.</span>
        </p>
        <p>
          My field of interests are building new <span className="highlight">Web Technologies, Problem Solving, and Software Development.</span> 
        </p>
        <p>
          Whenever possible, I also apply my passion for developing Sites with <span className="highlight"> SQL </span> 
          and <span className="highlight">Modern Javascript Libraries and Frameworks</span> like <span className="highlight">React.js and Node.js.</span>
        </p>
      </div>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default About;
