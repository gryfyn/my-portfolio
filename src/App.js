import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="resume"><Resume /></section>
      <section id="skills"><Skills /></section>
      <section id="services"><Services /></section>
      <section id="contacts"><Contact /></section>

      <Footer />


    </div>
  );
}

export default App;
