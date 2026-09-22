import React, { useState } from 'react';

const infoItems = [
  { icon: '✉', label: 'Email', value: 'khadijaaglagal853@gmail.com', href: 'mailto:khadijaaglagal853@gmail.com' },
  { icon: '☎', label: 'Phone', value: '+212 6 29 41 88 07', href: 'tel:+212629418807' },
  { icon: '⚲', label: 'LinkedIn', value: 'khadija-aglagal', href: 'https://www.linkedin.com/in/khadija-aglagal-643b33294' },
  { icon: '⌥', label: 'GitHub', value: 'khadijaaglagal15', href: 'https://github.com/khadijaaglagal15' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <h2>Contact <span style={{ color: 'var(--accent)' }}>Me</span></h2>
        </div>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows="5" value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              {sent ? 'Message sent ✓' : 'Send Message →'}
            </button>
          </form>
          <div className="contact-cards">
            {infoItems.map((item) => (
              <a className="info-card" href={item.href} key={item.label} target="_blank" rel="noreferrer">
                <span className="info-icon">{item.icon}</span>
                <div>
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
                <span className="info-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}