import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'resume', label: 'RESUME' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACTS' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">GRIFFINS ADERO</div>
        <nav className="nav">
          <ul className="nav-links">
            {links.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
