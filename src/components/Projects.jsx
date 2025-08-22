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
          <a
            href="https://movie-ticketing-system-o4l8.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <a
            href="https://electronic-journal-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live App →
          </a>
        </div>
      </div>

      {/* Westford Homes */}
      <div className="project-card">
        <div className="project-embed">
          <iframe
            src="https://www.westfordhomesinc.com/"
            title="Westford Homes"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="project-info">
          <h3>Westford Homes</h3>
          <p>
            A modern adult home platform designed with Next.js and Tailwind CSS.
            It features a clean, responsive UI and highlights Westford Homes' services,
            facilities, and community support for residents.
          </p>
          <a
            href="https://www.westfordhomesinc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Site →
          </a>
        </div>
      </div>

      {/* Blue Moon Car Wash */}
      <div className="project-card">
        <div className="project-embed">
          <iframe
            src="https://bluemoon-iq9j.vercel.app/"
            title="Blue Moon Car Wash"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="project-info">
          <h3>Blue Moon Car Wash</h3>
          <p>
            A mobile car wash booking platform built with React and Tailwind CSS.
            Customers can book car washes, explore services, and get location-based
            support — all through a smooth, modern interface.
          </p>
          <a
            href="https://bluemoon-iq9j.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Site →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
