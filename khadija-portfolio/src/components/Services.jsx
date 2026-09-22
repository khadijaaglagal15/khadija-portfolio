import React, { useState } from 'react';

const services = [
  { icon: '◎', title: 'Data Science & AI',
    desc: "Training at ENSIASD in Data Science, Big Data & AI, building skills in data analysis, statistics, and advanced algorithms.",
    tags: ['Python', 'Statistics', 'Operations Research', 'Algorithms'] },
  { icon: '</>', title: 'Web & Mobile Development',
    desc: 'Full applications from back-end to interface, like my Django + React Native mobile app.',
    tags: ['Django', 'React Native', 'HTML/CSS', 'JavaScript', 'Bootstrap'] },
  { icon: '{ }', title: 'Java Backend Development',
    desc: 'Robust back-end applications in Java and Spring Boot, with relational database management.',
    tags: ['Java', 'Spring Boot', 'JDBC', 'MySQL', 'PL/SQL'] },
  { icon: '◈', title: 'Blockchain & Smart Contracts',
    desc: 'Building decentralized apps and Smart Contracts, like my diploma-certification platform on Ethereum.',
    tags: ['Solidity', 'Ethereum', 'Web3', 'Smart Contracts'] },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>// what I do</p>
          <h2>My <span style={{ color: 'var(--accent)' }}>Areas</span></h2>
        </div>
        <div className="services-accordion">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`service-row ${isOpen ? 'is-open' : ''}`} key={service.title}>
                <button className="service-row-head" onClick={() => setOpenIndex(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-title">{service.title}</span>
                  <span className="service-chevron">{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                  <div className="service-body">
                    <p>{service.desc}</p>
                    <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}