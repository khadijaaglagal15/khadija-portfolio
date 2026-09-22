import React, { useEffect, useState } from 'react';

const roles = ['Artificial Intelligence', 'Big Data', 'Web Development'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="hero" style={{ borderTop: 'none' }}>
      <div className="wrap hero-grid">
        <div>
          <p className="hero-greeting">Hi, I'm <b>Khadija</b> — engineering student at ENSIASD</p>
          <h1 className="hero-title">
            Data Science &amp; AI<br />
            <span className="line-2">{text}<span className="caret" /></span>
          </h1>
          <p className="hero-sub">
            Student in Data Science, Big Data &amp; AI, holder of a DUT in Computer Engineering.
           
          </p>
          <div className="hero-actions">
            <a href="#projects"><button className="btn-primary">View my projects</button></a>
            <a href="#contact"><button className="btn-primary">Contact me</button></a>
          </div>
        </div>
        <div className="hero-photo-frame">
           <img src="public/images/profile.png" alt="Khadija Aglagal" />
          <svg viewBox="0 0 100 100" fill="none" stroke="#35D07F" strokeWidth="1.1">
            <circle cx="50" cy="36" r="18" />
            <path d="M18 90c4-22 20-32 32-32s28 10 32 32" />
          </svg>
          <div className="replace-note"></div>
          <div className="scroll-cue">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
              <path d="M12 4v14M6 12l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}