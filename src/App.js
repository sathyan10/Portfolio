import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <div>
      <Navbar />
      <section id="home" data-aos="fade-up">
        <Home />
      </section>
      <section id="about" data-aos="fade-up">
        <About />
      </section>
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>
      <section id="resume" data-aos="fade-up">
        <Resume />
      </section>
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
