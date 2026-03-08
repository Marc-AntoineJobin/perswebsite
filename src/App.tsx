import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Apropos from './Apropos'
import Competences from './Competences'
import Projets from './Projets'
import Accueil from './Accueil'
import './App.css'

const appStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: #F5F0E8;
    color: #1A1A1A;
  }

  .site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* NAV */
  .site-nav {
    background-color: #1A1A1A;
    padding: 0 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #FFFFFF;
    text-decoration: none;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .nav-brand span {
    color: #C8A96E;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2px;
    list-style: none;
  }

  .nav-links a {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    text-decoration: none;
    padding: 8px 18px;
    border-radius: 2px;
    transition: color 0.2s ease, background 0.2s ease;
  }

  .nav-links a:hover {
    color: rgba(255,255,255,0.85);
  }

  .nav-links a.active {
    color: #C8A96E;
    background: rgba(200, 169, 110, 0.08);
  }

  .nav-toggle {
    display: none;
    background: none;
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    padding: 6px 10px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 16px;
  }

  /* FOOTER */
  .site-footer {
    background-color: #1A1A1A;
    padding: 28px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.07);
    margin-top: auto;
  }

  .footer-copy {
    font-size: 12px;
    font-weight: 300;
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.05em;
  }

  .footer-link {
    font-size: 12px;
    font-weight: 400;
    color: #C8A96E;
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: opacity 0.2s;
  }

  .footer-link:hover { opacity: 0.7; }

  .site-main { flex: 1; }

  /* RESPONSIVE NAV */
  @media (max-width: 768px) {
    .site-nav { padding: 0 20px; flex-wrap: wrap; height: auto; padding-top: 16px; padding-bottom: 16px; gap: 12px; }
    .nav-toggle { display: block; }
    .nav-links { display: none; width: 100%; flex-direction: column; align-items: flex-start; padding-bottom: 8px; gap: 0; }
    .nav-links.open { display: flex; }
    .nav-links a { padding: 10px 4px; width: 100%; }
    .site-footer { flex-direction: column; gap: 8px; text-align: center; padding: 24px 20px; }
  }
`

function App() {
  const [menuOpen, setMenuOpen] = (window as any).React?.useState
    ? (window as any).React.useState(false)
    : [false, () => {}]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: appStyles }} />
      <div className="site-wrapper">
        <Router>
          <nav className="site-nav">
            <a className="nav-brand" href="#">Marc-Antoine <span>Jobin</span></a>
            <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
              <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Accueil</NavLink></li>
              <li><NavLink to="/apropos" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>À propos</NavLink></li>
              <li><NavLink to="/competences" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Compétences</NavLink></li>
              <li><NavLink to="/projets" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Projets</NavLink></li>
            </ul>
          </nav>

          <main className="site-main">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/competences" element={<Competences />} />
              <Route path="/projets" element={<Projets />} />
            </Routes>
          </main>

          <footer className="site-footer">
            <span className="footer-copy">© Marc-Antoine Jobin, 2025</span>
            <a
              href="https://github.com/Marc-AntoineJobin/perswebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              github.com/Marc-AntoineJobin/perswebsite →
            </a>
          </footer>
        </Router>
      </div>
    </>
  )
}

export default App