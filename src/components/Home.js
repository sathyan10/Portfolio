
import React from "react";
import "./Stars.scss";
import { ReactTyped as Typed } from 'react-typed';
import { Link } from 'react-scroll';
import profilePic from '../Assets/Profile.webp'; // Ensure the path to the image is correct

class Home extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="content-wrapper">
          <div className="intro-content">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am SATHYAN</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Developer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <Link
                  className="btn btn-primary btn js-scroll px-4"
                  to="projects"       // ID of the projects section
                  smooth={true}        // Enable smooth scrolling
                  duration={500}       // Scroll duration in ms
                  offset={-70}         // Optional: adjust scroll position
                >
                  View My Work
                </Link>
              </p>
            </div>
          </div>

          <div className="profile-picture">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
