// src/components/Services.jsx
import React from 'react';
import '../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faMobileAlt,
  faObjectGroup,
  faRobot,
  faPaintBrush,
  faChartBar,
  faLaptopCode,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';

const services = [
  { title: 'Web Development', icon: faCode },
  { title: 'Mobile App Development', icon: faMobileAlt },
  { title: 'UI/UX Design', icon: faObjectGroup },
  { title: 'AI Automation & Chatbots', icon: faRobot },
  { title: 'Graphic Design', icon: faPaintBrush },
  { title: 'Data Analytics', icon: faChartBar },
  { title: 'IT Support & Consulting', icon: faLaptopCode },
  { title: 'Software Architecture', icon: faProjectDiagram }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2>Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
