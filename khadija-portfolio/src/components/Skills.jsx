import React, { useState } from 'react';

const skillGroups = [
  { key: 'languages', label: 'Languages & Development', icon: '▦',
    skills: ['Java (javafx)', 'C', 'Python', 'PHP', 'HTML/CSS', 'JavaScript', 'Bootstrap','Django','React', 'Spring Boot', 'JDBC', 'WordPress'] },
  { key: 'databases', label: 'Databases', icon: '▥', skills: ['MySQL', 'SQL', 'PL/SQL', 'MongoDB'] },
  { key: 'tools', label: 'Tools & Environments', icon: '⚙', skills: ['GitHub', 'Linux', 'UI/UX Design','Apache','UML','Postman'] },
  { key: 'emerging', label: 'Emerging Technologies', icon: '◈', skills: ['Blockchain', 'Solidity', 'Web3'] },
   { key: 'Ai', label: 'Ai Technologies', icon: '◈', skills: ['machine learning', 'Data science', 'Jupyter Notebook'] },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}></p>
          <h2>My <span style={{ color: 'var(--accent)' }}>Skills</span></h2>
          <p className="section-sub">Skills built through my studies, internships, and personal projects.</p>
        </div>
        <div className="skills-cards">
          {skillGroups.map((group) => (
            <div key={group.key} className={`skill-card ${hovered === group.key ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHovered(group.key)} onMouseLeave={() => setHovered(null)}>
              <div className="skill-card-head">
                <span className="skill-card-icon">{group.icon}</span>
                <h3>{group.label}</h3>
              </div>
              <div className="skill-card-tags">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}