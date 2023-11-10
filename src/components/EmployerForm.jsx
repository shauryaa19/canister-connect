// EmployerForm.js

import React, { useContext, useState } from 'react';
import { JobsContext } from './JobContext'; // Assuming you have a context for managing jobs
// import './EmployerForm.css';

const EmployerForm = () => {
  const { addJob } = useContext(JobsContext);
  const [newJob, setNewJob] = useState({ title: '', description: '' });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewJob(prevJob => ({ ...prevJob, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Add the new job to the global state
    addJob(newJob);
    // Clear the form
    setNewJob({ title: '', description: '' });
  };

  return (
    <div>
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Job Title:</label>
        <input type="text" id="title" name="title" value={newJob.title} onChange={handleInputChange} required />

        <label htmlFor="description">Job Description:</label>
        <textarea id="description" name="description" value={newJob.description} onChange={handleInputChange} required></textarea>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default EmployerForm;
