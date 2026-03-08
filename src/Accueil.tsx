import ma_tronche from './assets/Ma_Tronche_coupee.png'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --cream: #F5F0E8;
    --dark: #1A1A1A;
    --accent: #C8A96E;
    --muted: #8A8A8A;
    --card-bg: #FFFFFF;
  }

  .accueil-wrapper {
    font-family: 'DM Sans', sans-serif;
    background-color: var(--cream);
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }

  /* HERO */
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 92vh;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 60px 48px;
    background-color: var(--dark);
    position: relative;
    overflow: hidden;
  }

  .hero-left::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 80% 20%, rgba(200, 169, 110, 0.15) 0%, transparent 60%);
    pointer-events: none;
  }

  .hero-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
    animation: fadeUp 0.8s ease forwards;
    opacity: 0;
    animation-delay: 0.1s;
  }

  .hero-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 5vw, 5.5rem);
    font-weight: 900;
    color: #FFFFFF;
    line-height: 1.05;
    margin: 0 0 28px 0;
    animation: fadeUp 0.8s ease forwards;
    opacity: 0;
    animation-delay: 0.2s;
  }

  .hero-tagline {
    font-size: 15px;
    font-weight: 300;
    color: rgba(255,255,255,0.55);
    line-height: 1.7;
    max-width: 360px;
    animation: fadeUp 0.8s ease forwards;
    opacity: 0;
    animation-delay: 0.35s;
  }

  .hero-tagline strong {
    color: var(--accent);
    font-weight: 500;
  }

  .hero-right {
    display: flex;
    align-items: stretch;
    position: relative;
    background-color: var(--cream);
    overflow: hidden;
  }

  .photo-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    animation: fadeIn 1.2s ease forwards;
    opacity: 0;
    animation-delay: 0.4s;
  }

  .photo-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(15%) contrast(1.05);
    transition: filter 0.6s ease;
  }

  .photo-container:hover img {
    filter: grayscale(0%) contrast(1);
  }

  .photo-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to top, var(--cream), transparent);
    pointer-events: none;
  }

  /* SCROLL INDICATOR */
  .scroll-hint {
    position: absolute;
    bottom: 32px;
    left: 48px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255,255,255,0.3);
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    animation: fadeUp 1s ease forwards;
    opacity: 0;
    animation-delay: 0.7s;
  }

  .scroll-line {
    width: 32px;
    height: 1px;
    background: rgba(255,255,255,0.3);
  }

  /* CONTENT SECTION */
  .content-section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 40px;
    display: grid;
    gap: 24px;
  }

  /* CARDS */
  .card-row {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 24px;
  }

  .info-card {
    background: var(--card-bg);
    border-radius: 4px;
    padding: 48px;
    border: 1px solid rgba(0,0,0,0.07);
    position: relative;
    overflow: hidden;
    animation: fadeUp 0.7s ease forwards;
    opacity: 0;
  }

  .info-card:nth-child(1) { animation-delay: 0.1s; }
  .info-card:nth-child(2) { animation-delay: 0.2s; }
  .info-card.full-width { animation-delay: 0.3s; }

  .info-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: var(--accent);
  }

  .card-number {
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    font-weight: 900;
    color: rgba(0,0,0,0.04);
    position: absolute;
    top: 16px;
    right: 24px;
    line-height: 1;
    user-select: none;
  }

  .card-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
    display: block;
  }

  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--dark);
    margin: 0 0 20px 0;
    line-height: 1.2;
  }

  .card-body-text {
    font-size: 15px;
    font-weight: 300;
    color: #555;
    line-height: 1.8;
  }

  .card-body-text strong {
    color: var(--dark);
    font-weight: 500;
  }

  /* PASSIONS */
  .passion-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
    justify-content: center;
  }

  .passion-tag {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dark);
    border: 1px solid rgba(0,0,0,0.18);
    padding: 8px 18px;
    border-radius: 2px;
    transition: all 0.2s ease;
    background: transparent;
  }

  .passion-tag:hover {
    background: var(--dark);
    color: var(--cream);
    border-color: var(--dark);
  }

  /* STAGE CARD */
  .stage-card {
    background: var(--dark);
    border-radius: 4px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    animation: fadeUp 0.7s ease forwards;
    opacity: 0;
    animation-delay: 0.2s;
  }

  .stage-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 24px;
  }

  .stage-badge::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 2s infinite;
  }

  .stage-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1.3;
    margin: 0 0 16px 0;
  }

  .stage-text {
    font-size: 14px;
    font-weight: 300;
    color: rgba(255,255,255,0.5);
    line-height: 1.7;
    margin-bottom: 32px;
  }

  /* GITHUB CARD */
  .github-card {
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background: var(--card-bg);
    animation: fadeUp 0.7s ease forwards;
    opacity: 0;
    animation-delay: 0.3s;
    position: relative;
    overflow: hidden;
  }

  .github-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: var(--dark);
  }

  .github-icon {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .github-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--dark);
    margin: 0 0 8px 0;
  }

  .github-sub {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 28px;
  }

  /* BUTTONS */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--cream);
    background: var(--dark);
    border: none;
    padding: 14px 28px;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    width: fit-content;
  }

  .btn-primary:hover {
    background: var(--accent);
    color: var(--dark);
    gap: 14px;
  }

  .btn-accent {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark);
    background: var(--accent);
    border: none;
    padding: 14px 28px;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    width: fit-content;
  }

  .btn-accent:hover {
    background: #d4b87a;
    gap: 14px;
  }

  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark);
    background: transparent;
    border: 1px solid rgba(0,0,0,0.25);
    padding: 14px 28px;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    width: fit-content;
  }

  .btn-outline:hover {
    background: var(--dark);
    color: var(--cream);
    border-color: var(--dark);
    gap: 14px;
  }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .hero { grid-template-columns: 1fr; min-height: auto; }
    .hero-left { padding: 48px 28px 40px; order: 2; }
    .hero-right { height: 55vw; order: 1; }
    .card-row { grid-template-columns: 1fr; }
    .content-section { padding: 48px 20px; }
    .info-card { padding: 32px 28px; }
    .stage-card { padding: 32px 28px; }
    .github-card { padding: 32px 28px; }
  }
`

function Accueil() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="accueil-wrapper">

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <span className="hero-label">Portfolio · 2025</span>
            <h1 className="hero-name">Marc-Antoine<br />Jobin</h1>
            <p className="hero-tagline">
              Étudiant en <strong>informatique au Cégep de Sainte-Foy</strong>, 
              passionné par les nouvelles technologies — à la recherche d'un 
              <strong> stage de fin d'études</strong>.
            </p>
            <div className="scroll-hint">
              <span className="scroll-line" />
              En savoir plus
            </div>
          </div>
          <div className="hero-right">
            <div className="photo-container">
              <img src={ma_tronche} alt="Marc-Antoine Jobin" />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <main className="content-section">

          {/* ROW: À propos + Stage */}
          <div className="card-row">
            <div className="info-card">
              <span className="card-label">À propos</span>
              <h2 className="card-title">Qui suis-je ?</h2>
              <p className="card-body-text">
                Je suis un <strong>étudiant en informatique</strong> au Cégep de Sainte-Foy, 
                curieux et motivé, qui adore explorer de nouvelles technologies et relever 
                des défis techniques.
              </p>
              <div className="passion-tags">
                <span className="passion-tag">🏔 Randonnée</span>
                <span className="passion-tag">⚽ Soccer</span>
                <span className="passion-tag">🧗 Escalade</span>
              </div>
            </div>

            <div className="stage-card">
              <div>
                <span className="stage-badge">Disponible</span>
                <h2 className="stage-title">À la recherche d'un stage</h2>
                <p className="stage-text">
                  Passionné par le développement et toujours prêt à apprendre — 
                  je cherche une opportunité de stage pour mettre mes compétences en pratique.
                </p>
              </div>
              <a href="mailto:" className="btn-accent">
                Me contacter →
              </a>
            </div>
          </div>

          {/* ROW FULL: GitHub */}
          <div className="github-card full-width">
            <div className="github-icon">⌥</div>
            <h3 className="github-title">Ce site est encore en développement</h3>
            <p className="github-sub">Retrouvez le code source sur GitHub</p>
            <a
              href="https://github.com/Marc-AntoineJobin/perswebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Voir le repository →
            </a>
          </div>

        </main>
      </div>
    </>
  )
}

export default Accueil