import React, { useState } from 'react';

const links = [
  { href: '#home', label: 'Accueil' },
  { href: '#projects', label: 'Projets' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Compétences' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          <span className="logo-dot" />
          Khadija Aglagal
        </a>

        <nav className="nav-links">
          {links.map((link, i) => (
            <a key={link.href} href={link.href} className={i === 0 ? 'active' : ''}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact">
          <button className="contact-btn">Me contacter</button>
        </a>

        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 5%', borderTop: '1px solid var(--line)' }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{ padding: '10px 0', color: 'var(--text-dim)' }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ padding: '10px 0', color: 'var(--accent)' }}>
            Me contacter
          </a>
        </nav>
      )}
    </header>
  );
}