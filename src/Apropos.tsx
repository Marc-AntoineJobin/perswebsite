const styles = `
  .apropos-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 40px;
  }

  .apropos-header {
    margin-bottom: 64px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    padding-bottom: 40px;
  }

  .page-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #C8A96E;
    display: block;
    margin-bottom: 16px;
    animation: fadeUp 0.6s ease forwards;
    opacity: 0;
    animation-delay: 0.05s;
  }

  .page-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 900;
    color: #1A1A1A;
    line-height: 1.05;
    animation: fadeUp 0.6s ease forwards;
    opacity: 0;
    animation-delay: 0.1s;
  }

  .apropos-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .apropos-card {
    background: #FFFFFF;
    border-radius: 4px;
    padding: 48px;
    border: 1px solid rgba(0,0,0,0.07);
    position: relative;
    overflow: hidden;
    animation: fadeUp 0.7s ease forwards;
    opacity: 0;
  }

  .apropos-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #C8A96E;
  }

  .apropos-card:nth-child(1) { animation-delay: 0.15s; }
  .apropos-card:nth-child(2) { animation-delay: 0.25s; }
  .apropos-card.coming-soon { 
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 280px;
    background: #1A1A1A;
    animation-delay: 0.2s;
  }

  .apropos-card.coming-soon::before {
    background: #C8A96E;
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

  .card-number-light {
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    font-weight: 900;
    color: rgba(255,255,255,0.04);
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
    color: #C8A96E;
    margin-bottom: 16px;
    display: block;
  }

  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1A1A1A;
    margin: 0 0 16px 0;
    line-height: 1.2;
  }

  .card-body-text {
    font-size: 15px;
    font-weight: 300;
    color: #555;
    line-height: 1.8;
  }

  .coming-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 12px;
    text-align: center;
  }

  .coming-sub {
    font-size: 14px;
    font-weight: 300;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.1em;
    text-align: center;
  }

  .coming-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #C8A96E;
    margin: 0 auto 24px;
    animation: pulse 2s infinite;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }

  @media (max-width: 768px) {
    .apropos-wrapper { padding: 48px 20px; }
    .apropos-grid { grid-template-columns: 1fr; }
    .apropos-card.coming-soon { grid-column: 1; }
    .apropos-card { padding: 32px 28px; }
  }
`

function Apropos() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="apropos-wrapper">

        <header className="apropos-header">
          <h1 className="page-title">À propos</h1>
        </header>

        <div className="apropos-grid">
          <div className="apropos-card">
            <h2 className="card-title">Marc-Antoine Jobin</h2>
            <p className="card-body-text">
              Étudiant en informatique au Cégep de Sainte-Foy, passionné par le développement 
              et les nouvelles technologies. Cette section sera bientôt complétée avec plus de détails.
            </p>
          </div>

          <div className="apropos-card">
            <h2 className="card-title">Formation</h2>
            <p className="card-body-text">
              Techniques de l'informatique — Cégep de Sainte-Foy. 
              Plus d'informations sur mon parcours à venir prochainement.
            </p>
          </div>

          <div className="apropos-card coming-soon">
            <div className="coming-dot" />
            <h2 className="coming-title">Contenu à venir</h2>
            <p className="coming-sub">Cette page sera complétée prochainement</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Apropos