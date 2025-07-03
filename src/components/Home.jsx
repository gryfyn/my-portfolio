// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css';
import GriffPortrait from "../images/griff.png";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-text">
          <h1>
            I am a <span className="highlight">software developer</span><br />
            based in <span className="highlight">Dubai, UAE</span>
          </h1>
        </div>
        <div className="home-image">
          <img src={GriffPortrait} alt="Griff Adero" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
