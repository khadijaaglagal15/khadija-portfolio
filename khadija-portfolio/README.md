# khadija-portfolio

A dark, green-accented personal portfolio built with React + Vite.

## Structure

```
khadija-portfolio/
├── public/
│   └── images/
│       └── profile.png        ← add your own photo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── index.html
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Customize

- **Photo**: drop your picture at `public/images/profile.png`, then swap the
  placeholder `<svg>` in `src/components/Hero.jsx` for `<img src="/images/profile.png" alt="Khadija" />`.
- **Text & projects**: all copy lives directly inside each component in `src/components/`.
- **Colors**: edit the CSS variables at the top of `src/index.css` (`--bg`, `--accent`, etc.)
- **Contact links**: update the email, phone and social links in `src/components/Contact.jsx`.
