// src/components/About.jsx
import React from 'react';
import '../styles/About.css';
import PassportPhoto from '../images/griff2.jpg'; // replace with your image path

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-photo">
          <img src={PassportPhoto} alt="Griffins Adero" className="passport-photo" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I’m a software engineer with hands-on experience building full-stack web and mobile applications. During my time at QPID Technologies, I contributed to the development of a ticket booking platform using React and Firebase. I also helped optimize a major upgrade of the company’s mobile app and integrated a secure electronic payment system, improving both user experience and platform performance.
          </p>

          <p>
            My educational journey led me to a Bachelor’s degree in Applied Computing Technology from United States International University. There, I developed a strong foundation in system design, data analytics, and machine learning — equipping me with the ability to build and scale modern software systems from the ground up.
          </p>

          <p>
            My technical skills include JavaScript, React, Node.js, Python, Firebase, MySQL, and MongoDB. I’m passionate about building responsive, secure, and maintainable digital products. I also enjoy working with cross-functional teams to solve real-world problems using technology.
          </p>

          <p>
            Outside of engineering, I believe in using tech for good. I’ve volunteered at the Missionaries of Charity in Nairobi, supporting children with special needs through cleaning, community outreach, and clothing drives. I value empathy, collaboration, and the power of purposeful innovation.
          </p>

          <div className="bio-info">
            <p><strong>Name:</strong> Griffins Geoffrey Adero</p>
            <p><strong>Date of Birth:</strong> November 7, 1998</p>
            <p><strong>Address:</strong> 33St Al Satwa, Dubai</p>
            <p><strong>Zip Code:</strong> 25314</p>
            <p><strong>Email:</strong> aderogriffins254@gmail.com</p>
            <p><strong>Phone:</strong> +971 583 069 321</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
