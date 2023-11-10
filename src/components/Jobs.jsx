// Jobs.js

import React, { useState, useEffect } from 'react';
import './Jobs.css'; // Import the CSS file

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Simulated job data (replace with actual job data retrieved from your backend)
    setTimeout(() => {
      setJobs([
        { id: 1, title: 'ICP Developer', description: 'Developing smart contracts and dapps on the Internet Computer' },
        { id: 2, title: 'Frontend Developer', description: 'React, JavaScript, HTML, CSS' },
        { id: 3, title: 'Blockchain Developer', description: 'Solidity, Web3.js, Smart Contracts' },
        // Add more job objects as needed
      ]);
    }, 1000); // Simulating API call delay
  }, []);

  const handleApplyClick = job => {
    setSelectedJob(job);
    setShowApplyForm(true);
  };

  const closeApplyForm = () => {
    setShowApplyForm(false);
  };

  const handleSubmitApplication = event => {
    event.preventDefault();
    // Implement your logic to handle the job application submission
    // You can send the data to the server or perform any other necessary actions
    // For now, let's log the data to the console
    console.log('Submitting application for job:', selectedJob);
    // Close the form after submission
    closeApplyForm();
  };

  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>
      <div className="jobs-list">
        {jobs.length ? (
          jobs.map(job => (
            <div className="job" key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <button onClick={() => handleApplyClick(job)}>Apply Now</button>
            </div>
          ))
        ) : (
          <p>Loading jobs...</p>
        )}
      </div>

      {showApplyForm && selectedJob && (
        <div className="apply-form">
          <h3>Apply for: {selectedJob.title}</h3>
          <form>
            {/* Your form inputs go here */}
            <button type="button" onClick={handleSubmitApplication}>Submit Application</button>
            <button type="button" onClick={closeApplyForm}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Jobs;
