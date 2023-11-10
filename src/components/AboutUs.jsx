// AboutUs.js

import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to CanisterConnect, the platform connecting ICP developers and freelance projects.</p>
      <p>
        CanisterConnect is dedicated to facilitating the interaction between developers and project owners 
        within the Internet Computer ecosystem, enabling seamless collaboration and project fulfillment.
      </p>
      <p>
        Our platform is designed to offer a user-friendly experience, where developers can explore 
        projects and project owners can find skilled developers.
      </p>
      <p>
        At CanisterConnect, our mission is to foster a vibrant community, promoting innovation, 
        and creating opportunities for ICP developers and project stakeholders.
      </p>
      {/* Add more information about your platform or team */}
    </div>
  );
};

export default AboutUs;
