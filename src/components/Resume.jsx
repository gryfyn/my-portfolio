// src/components/Resume.jsx
import React from 'react';
import '../styles/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faFileDownload,
  faPenNib,
  faDatabase,
  faShieldAlt,
  faChartLine,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faNodeJs,
  faJsSquare,
  faPython,
  faRProject,
  faAndroid,
  faApple,
  faFigma,
  faGithub,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <h2>Resume</h2>

        {/* EDUCATION */}
        <div className="resume-row">
          <div className="resume-left">
            <h3 className="resume-title">BSc Applied Computing Technology</h3>
            <p>
              I began my academic journey in Nairobi, Kenya, where I pursued a Bachelor of Science in Applied Computing Technology at the United States International University. My studies emphasized software engineering, data analytics, security systems, and human-computer interaction. This strong academic foundation shaped my thinking as a problem-solver and prepared me to build scalable, efficient systems from the ground up.
            </p>
            <div className="tech-icons native">
              <FontAwesomeIcon icon={faPython} />
              <FontAwesomeIcon icon={faDatabase} />
              <FontAwesomeIcon icon={faRProject} />
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
          </div>
          <div className="resume-right">
            <p className="date-range">Jan 2020- Oct 2024</p>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="resume-row">
          <div className="resume-left">
            <h3 className="resume-title">Software Engineer / Admin Assistant</h3>
            <p>
              I started at Kisumu City Poultry Enterprise managing office systems and financial reporting. Later, I became a Software Engineer at QPID Technologies, where I helped develop a React-Firebase SPA for event ticketing, enhanced app performance, and integrated secure payment systems. I contributed across frontend, backend, and UI/UX improvements.
            </p>
            <div className="tech-icons native">
              <FontAwesomeIcon icon={faJsSquare} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNodeJs} />
              <FontAwesomeIcon icon={faLock} />
              <FontAwesomeIcon icon={faChartLine} />
            </div>
          </div>
          <div className="resume-right">
            <p className="date-range">Jan 2018 – Dec 2019</p>
          </div>
        </div>

        {/* FREELANCE */}
        <div className="resume-row">
          <div className="resume-left">
            <h3 className="resume-title">Freelance Software & IT Specialist</h3>
            <p>
              Today, I work as a full-time freelancer based in Dubai, UAE. I specialize in building mobile/web apps, automating workflows with AI, and designing user-first UI/UX and brand visuals. I serve individuals and startups with custom digital solutions, combining creativity with deep tech knowledge to solve modern problems.
            </p>
            <div className="tech-icons native">
              <FontAwesomeIcon icon={faAndroid} />
              <FontAwesomeIcon icon={faApple} />
              <FontAwesomeIcon icon={faVuejs} />
              <FontAwesomeIcon icon={faFigma} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faBrain} />
              <FontAwesomeIcon icon={faPenNib} />
            </div>
          </div>
          <div className="resume-right">
            <p className="date-range">Nov 2024 – Present</p>
          </div>
        </div>

        {/* DOWNLOAD LINK */}
        <div className="download-cv">
          <a href="/cv/Software_Engineer_CV_Griffins_Adero.pdf" download>
            <FontAwesomeIcon icon={faFileDownload} /> Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
