// src/components/Projects.jsx
import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      {/* Movie Ticketing System */}
      <div className="project-card">
        <div className="project-embed">
          <iframe 
            src="https://movie-ticketing-system-o4l8.vercel.app/" 
            title="Movie Ticketing System" 
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="project-info">
          <h3>Movie Ticketing System</h3>
          <p>
            A full-stack movie booking platform built with React, Supabase, and Flutterwave. Users can browse movies, view showtimes, and purchase tickets seamlessly.
          </p>
          <a href="https://movie-ticketing-system-o4l8.vercel.app/" target="_blank" rel="noopener noreferrer">
            Visit Live App →
          </a>
        </div>
      </div>

      {/* Electronic Journal */}
      <div className="project-card">
        <div className="project-embed">
          <iframe 
            src="https://electronic-journal-two.vercel.app/" 
            title="Electronic Journal App" 
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="project-info">
          <h3>Electronic Journal Web App</h3>
          <p>
            A full-featured journaling platform built with Next.js and Tailwind CSS. Users can log their thoughts, track mood, manage meetings and tasks — all in one clean interface.
          </p>
          <a href="https://electronic-journal-two.vercel.app/" target="_blank" rel="noopener noreferrer">
            Visit Live App →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
