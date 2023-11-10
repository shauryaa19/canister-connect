// JobsContext.js

import React, { createContext, useState } from 'react';

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = newJob => {
    setJobs(prevJobs => [...prevJobs, { id: prevJobs.length + 1, ...newJob }]);
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobsContext.Provider>
  );
};
