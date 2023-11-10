// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to CanisterConnect</h1>
        <p>Connect with ICP developers and find freelance projects!</p>
        <a href="/register" className="get-started-button">Get Started</a>
      </header>

      <section className="features-section">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Find Projects</h3>
            <Link to="/jobs"><p>Browse a variety of ICP projects and freelance opportunities.</p></Link>
          </div>
          <div className="feature-card">
            <h3>Connect with Developers</h3>
            <p>Engage with talented ICP developers for your projects.</p>
          </div>
          <div className="feature-card">
            <h3>Post Projects</h3>
            <p>Showcase your projects and hire skilled developers.</p>
          </div>
        </div>
      </section>
    </div>
  );
};


