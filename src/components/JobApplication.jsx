// JobApplication.js

import React from 'react';

const JobApplication = ({ selectedJob, history }) => {
  const handleFormSubmit = event => {
    event.preventDefault();
    // Simulated submission
    console.log('Form submitted:', event.target);
    // Redirect to success page after submission
    history.push('/application-success');
  };

  return (
    <div>
      <h2>Apply for: {selectedJob.title}</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="coverLetter">Cover Letter:</label>
        <textarea id="coverLetter" name="coverLetter" rows="4" required></textarea>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplication;
