// Profile.js

import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const [user, setUser] = useState(null);

  // Simulated user data (replace with actual user data retrieved from Internet Identity or backend)
  useEffect(() => {
    // Simulated asynchronous data retrieval
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        education: 'Computer Science',
        previousProjects: 'Project A, Project B',
        techStack: 'JavaScript, React, Solidity',
        icpExperience: '2 years',
      });
    }, 1000); // Simulating API call delay
  }, []);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div className="profile-details">
          <p><span>Name:</span> {user.name}</p>
          <p><span>Educational Qualification:</span> {user.education}</p>
          <p><span>Previous Projects:</span> {user.previousProjects}</p>
          <p><span>Tech Stack Familiarity:</span> {user.techStack}</p>
          <p><span>Experience with ICP:</span> {user.icpExperience}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
