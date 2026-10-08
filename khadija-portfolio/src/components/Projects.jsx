import React, { useState } from 'react';

const projects = [
  {
    index: '01',
    name: 'Second-hand Item Exchange App',
    subtitle: 'Final-year internship — DevForYou',
    desc: 'Mobile app for exchanging second-hand items between users. Django back-end, React Native mobile interface, MySQL database.',
    category: 'Mobile',
    tags: ['Django', 'React Native', 'MySQL'],
    tone: 'from-dark',
    image: '/images/hja.jpeg ', // put your screenshot here, or leave it — falls back to a color block
  },
  {
    index: '02',
    name: 'Diploma Certification via Blockchain',
    subtitle: 'Final-year project',
    desc: 'Platform for secure diploma certification and verification on Ethereum, using Smart Contracts to guarantee authenticity and data integrity.',
    category: 'Blockchain',
    tags: ['Solidity', 'Ethereum', 'Web3', 'Tailwind', 'Remix', 'Node','Metamask','Express'],
    tone: 'from-plant',
    image: '/images/pagrhome1.png',
  },
  {
    index: '03',
    name: 'Event Management Platform',
    subtitle: 'Observation internship — AREF Guelmim Oued Noun',
    desc: 'Web platform for managing and communicating events organized by the academy, with an interactive interface.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    tone: 'from-desk',
    image: '/images/site.png', // put your screenshot here, or leave it — falls back to a color block
  },
  {
    index: '04',
    name: 'Oued-Souss Alert',
    subtitle: 'Academic project',
    desc: 'Oued Souss Alerte is a web-based project designed to improve awareness and communication about potential risks related to the Oued Souss area. The platform provides useful information and alerts to help users stay informed about environmental and safety situations. The project focuses on presenting information in a simple, accessible, and user-friendly interface, with the aim of supporting local communities and raising awareness about potential risks.',
    category: 'Web',
    tags: ['Node.js', 'React', 'MongoDB'],
    tone: 'from-dark',
    image: '/images/awal (1).PNG',
  },
   {
    index: '05',
    name: 'Intrusion Detection System',
    subtitle: 'Academic project',
    desc: 'Intrusion Detection System (IDS) is a web-based application developed to detect malicious network traffic using machine learning. A machine learning-based web application that detects malicious network traffic using the CICIDS2017 dataset and a Random Forest model. Built with Flask for simple and interactive predictions',

    category: 'Web',
    tags: ['Python','Flask', 'Html','Css','Bootstrap','Javascript', 'Jupyter Notebook', 'sqlite'],
    tone: 'from-dark',
   image: '/images/dashboard_pages_combined.png',
  },
];

const filters = ['All', 'Mobile', 'Blockchain', 'Web', 'Desktop'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [brokenImages, setBrokenImages] = useState({});
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}></p>
          <h2>My <span style={{ color: 'var(--accent)' }}>Projects</span></h2>
        </div>

        <div className="filter-row">
          {filters.map((f) => (
            <button key={f} className={`filter-chip ${active === f ? 'is-active' : ''}`} onClick={() => setActive(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project) => {
            const hasImage = project.image && !brokenImages[project.name];
            return (
              <div className="work-card" key={project.name}>
                <div className={`work-thumb ${hasImage ? '' : project.tone}`}>
                  {hasImage && (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="work-thumb-img"
                      onError={() => setBrokenImages((prev) => ({ ...prev, [project.name]: true }))}
                    />
                  )}
                  <span className="work-index">{project.index}</span>
                  <div className="work-overlay">
                    <span className="work-view" style={{ textAlign: 'center', maxWidth: '220px' }}>
                      {project.desc}
                    </span>
                  </div>
                </div>
                <div className="work-meta">
                  <span className="work-cat">{project.subtitle}</span>
                  <h3>{project.name}</h3>
                  <div className="project-tags" style={{ marginTop: '10px' }}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}