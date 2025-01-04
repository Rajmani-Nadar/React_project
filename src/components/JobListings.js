import React from 'react';
import './JobListings.css';

const JobListings = () => {
  const jobs = [
    { id: 1, title: "Software Developer", location: "New York" },
    { id: 2, title: "Data Scientist", location: "San Francisco" },
    { id: 3, title: "UX Designer", location: "Austin" },
  ];

  return (
    <section className="job-listings">
      <h2>Featured Jobs</h2>
      <div className="jobs-grid">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListings;
