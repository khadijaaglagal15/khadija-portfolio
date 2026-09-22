import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Cta from './components/Cta.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Education />
        <Contact />
        <Cta />
      </main>
      <footer>
        <div className="wrap footer-row">
          <span>© 2026 Khadija Aglagal — tous droits réservés</span>
          <span>conçu avec React</span>
        </div>
      </footer>
    </>
  );
}