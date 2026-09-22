import React from 'react';

const timeline = [
  { year: '2024 — Present', title: 'Engineering Degree — Data Science, Big Data & AI', place: 'ENSIASD, National School of AI and Data Sciences, Taroudant' },
  { year: '2023 — 2025', title: 'University Diploma of Technology (DUT) — Computer Engineering', place: 'École Supérieure de Technologie (EST) de Guelmim' },
  { year: '2023', title: 'Baccalaureate — Physical Sciences', place: 'Lycée Aday' },
];

const certifications = [{ title: 'Learn Blockchain and Crypto from Beginning', place: 'Udemy' }];

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <p className="section-eyebrow">// education</p>
          <h2>Background &amp; certifications</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.title}>
              <span className="t-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </div>
          ))}
          {certifications.map((cert) => (
            <div className="timeline-item" key={cert.title}>
              <span className="t-year">Certification</span>
              <h3>{cert.title}</h3>
              <p>{cert.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}