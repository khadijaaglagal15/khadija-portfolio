import React from 'react';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khadija-aglagal-643b33294' },
  { label: 'GitHub', href: 'https://github.com/khadijaaglagal15' },
  { label: 'Email', href: 'mailto:khadijaaglagal853@gmail.com' },
];

export default function Cta() {
  return (
    <section className="cta-banner">
      <div className="wrap cta-inner">
        <h2>Want to collaborate with <span style={{ color: 'var(--accent)' }}>Khadija</span> on a Data / AI or Web project?</h2>
        <div className="cta-socials">
          {socials.map((s) => <a href={s.href} key={s.label} target="_blank" rel="noreferrer">{s.label}</a>)}
        </div>
      </div>
    </section>
  );
}