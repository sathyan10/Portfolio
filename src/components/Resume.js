import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";
import resume from "../Assets/resume.jpg"; // Replace with your actual image path

const Resume = () => {
  const handleDownload = () => {
    const resumeLink = "https://drive.google.com/file/d/1WnbkM81UJ4pKwMJeHGwTNji5uiWSJ2aD/view?usp=sharing"; // Replace with your actual resume download link
    window.open(resumeLink, "_blank");
  };

  // Animation variants for smoother transitions
  const resumeVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 12, duration: 1 },
    },
  };

  const buttonVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 12, duration: 1 },
    },
  };

  return (
    <motion.div
      className="resume-container"
      initial="hidden"
      animate="visible"
    >
      <div className="content-wrapper">
        {/* Resume Image */}
        <motion.div
          className="resume-image-container"
          variants={resumeVariants}
        >
          <img src={resume} alt="Resume" className="resume-image" />
        </motion.div>

        {/* Center Line */}
        <div className="vertical-line"></div>

        {/* Download Button */}
        <motion.div
          className="download-button-container"
          variants={buttonVariants}
        >
          <button className="download-button" onClick={handleDownload}>
            Download Resume
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
