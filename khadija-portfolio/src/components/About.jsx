import React from 'react';

const details = [
  { label: 'NAME', value: 'Khadija Aglagal' },
  { label: 'DATE OF BIRTH', value: 'April 15,2005' },
  { label: 'ADDRESS', value: 'Guelmim, Morocco' },
  { label: 'EMAIL', value: 'khadijaaglagal853@gmail.com' },
  { label: 'PHONE', value: '+212 6 29 41 88 07' },
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <p className="section-eyebrow"></p>
          <h2>Who I am</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>Khadija Aglagal</strong>, a second-year engineering student at
              <strong> ENSIASD</strong> (National School of AI and Data Sciences, Taroudant),
              majoring in Data Science, Big Data, and Artificial Intelligence.
            </p>
            <p>
              I hold a <strong>DUT in Computer Engineering</strong> and am currently developing my
              expertise in Data Science and AI through academic projects and hands-on learning. I'm
              particularly interested in applying data and AI to real-world problems, and I'm
              looking to deepen my skills through hands-on projects, internships, and
              collaborative opportunities.
            </p>
          </div>

          
        </div>

        <div className="details-panel">
          <div className="details-list">
            {details.map((item) => (
              <div className="details-row" key={item.label}>
                <span className="details-label">{item.label}:</span>
                <span className="details-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="details-card">
            
            <a href="/public/images/cv de khadija aglagal ENSIASD.pdf" download className="btn-primary details-download">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}