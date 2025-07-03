// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  {
    title: 'Data Analytics',
    tools: ['Excel', 'R', 'Python', 'SPSS']
  },
  {
    title: 'Web Development',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Firebase']
  },
  {
    title: 'Cross-platform Mobile Development',
    tools: ['React Native', 'Expo', 'Android Studio', 'Xcode']
  },
  {
    title: 'AI Development & Machine Learning',
    tools: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'Scikit-learn']
  },
  {
    title: 'AI Business Automation',
    tools: ['Zapier', 'Make.com', 'Python Scripts', 'Custom APIs']
  },
  {
    title: 'Graphic Design',
    tools: ['Figma', 'Canva', 'Photoshop', 'Illustrator']
  },
  {
    title: 'Project Management',
    tools: ['Trello', 'Jira', 'Notion', 'ClickUp']
  },
  {
    title: 'Software Architecture, Design and Analysis',
    tools: ['UML', 'ER Diagrams', 'Lucidchart', 'Draw.io']
  },
  {
    title: 'Software Testing',
    tools: ['Jest', 'Mocha', 'Chai', 'Postman', 'Selenium']
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.title}</h3>
              <ul>
                {skill.tools.map((tool, idx) => (
                  <li key={idx}>▪ {tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
