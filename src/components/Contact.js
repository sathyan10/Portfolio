import React, { useState } from "react";
import axios from "axios";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("https://your-api-endpoint.com/send", formData);
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="contact-container">
      <h2 id="contact-heading">Contact</h2>
      <div id="contact-content">
        <div id="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 9361638255</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>msathyanit@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Coimbatore, Tamilnadu</span>
          </div>
        </div>

        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-input contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contact-button">Send</button>
          <p id="contact-status">{status}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
