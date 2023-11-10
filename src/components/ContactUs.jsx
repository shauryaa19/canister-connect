// ContactUs.js

import React from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to connect with us via Discord or using your Internet Identity!</p>
      <div className="contact-info">
        <div className="discord">
          <h3>Join Our Discord</h3>
          <p>Click the link below to join our community on Discord:</p>
          <a href="https://discord.example.com" target="_blank" rel="noopener noreferrer">
            Discord Server
          </a>
        </div>
        <div className="internet-identity">
          <h3>Internet Identity</h3>
          <p>Use your Internet Identity to reach us:</p>
          <button>Login with Internet Identity</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
