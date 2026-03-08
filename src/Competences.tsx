import mysql from './assets/mysql.png';
import java from './assets/java.svg';
import csharp from './assets/csharp.png';
import html from './assets/html.png';

const styles = `
  .competences-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 40px;
  }

  .page-header {
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

  /* SECTION TITLES */
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 28px;
    animation: fadeUp 0.6s ease forwards;
    opacity: 0;
    animation-delay: 0.15s;
  }

  /* LANGUAGE GRID */
  .lang-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 48px;
  }

  .lang-card {
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.07);
    padding: 32px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    position: relative;
    overflow: hidden;
    cursor: default;
    animation: fadeUp 0.6s ease forwards;
    opacity: 0;
    transition: box-shadow 0.25s ease, transform 0.25s ease;
  }

  .lang-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #C8A96E;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .lang-card:hover::before { transform: scaleX(1); }
  .lang-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }

  .lang-card:nth-child(1) { animation-delay: 0.1s; }
  .lang-card:nth-child(2) { animation-delay: 0.15s; }
  .lang-card:nth-child(3) { animation-delay: 0.2s; }
  .lang-card:nth-child(4) { animation-delay: 0.25s; }

  .lang-img {
    height: 64px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }

  .lang-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #1A1A1A;
  }

  .lang-level {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #C8A96E;
    border: 1px solid rgba(200,169,110,0.4);
    padding: 4px 12px;
    border-radius: 2px;
  }

  /* LIKES GRID */
  .likes-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 48px;
  }

  .like-card {
    border-radius: 4px;
    padding: 40px 48px;
    position: relative;
    overflow: hidden;
    animation: fadeUp 0.7s ease forwards;
    opacity: 0;
  }

  .like-card.positive {
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.07);
    animation-delay: 0.2s;
  }

  .like-card.positive::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #4CAF7D;
  }

  .like-card.negative {
    background: #1A1A1A;
    animation-delay: 0.3s;
  }

  .like-card.negative::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #C8A96E;
  }

  .like-card-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
  }

  .like-card.positive .like-card-label { color: #4CAF7D; }
  .like-card.negative .like-card-label { color: #C8A96E; }

  .like-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 0 12px 0;
  }

  .like-card.positive .like-card-title { color: #1A1A1A; }
  .like-card.negative .like-card-title { color: #FFFFFF; }

  .like-card-text {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .like-card.positive .like-card-text { color: #666; }
  .like-card.negative .like-card-text { color: rgba(255,255,255,0.45); }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 2px;
    transition: all 0.2s ease;
  }

  .tag-green {
    color: #4CAF7D;
    border: 1px solid rgba(76,175,125,0.35);
    background: transparent;
  }

  .tag-green:hover { background: #4CAF7D; color: white; }

  .tag-light {
    color: rgba(255,255,255,0.6);
    border: 1px solid rgba(255,255,255,0.15);
    background: transparent;
  }

  .tag-light:hover { background: rgba(255,255,255,0.1); }

  /* OTHER SKILLS */
  .other-card {
    background: #FFFFFF;
    border-radius: 4px;
    padding: 48px;
    border: 1px solid rgba(0,0,0,0.07);
    position: relative;
    overflow: hidden;
    animation: fadeUp 0.7s ease forwards;
    opacity: 0;
    animation-delay: 0.35s;
  }

  .other-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #1A1A1A;
  }

  .other-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
    justify-content: center;
  }

  .other-tag {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1A1A1A;
    border: 1px solid rgba(0,0,0,0.18);
    padding: 9px 20px;
    border-radius: 2px;
    transition: all 0.2s ease;
    background: transparent;
  }

  .other-tag:hover {
    background: #1A1A1A;
    color: #F5F0E8;
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

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 900px) {
    .lang-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 768px) {
    .competences-wrapper { padding: 48px 20px; }
    .likes-grid { grid-template-columns: 1fr; }
    .like-card { padding: 32px 28px; }
    .other-card { padding: 32px 28px; }
  }
`

function Competences() {
  const languages = [
    { name: 'Java', image: java, level: 'Avancé' },
    { name: 'C#', image: csharp, level: 'Intermédiaire' },
    { name: 'MySQL', image: mysql, level: 'Avancé' },
    { name: 'HTML/CSS', image: html, level: 'Avancé' }
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="competences-wrapper">

        <header className="page-header">
          <span className="page-label">Portfolio</span>
          <h1 className="page-title">Compétences</h1>
        </header>

        {/* LANGUAGES */}
        <h2 className="section-title">Langages préférés</h2>
        <div className="lang-grid">
          {languages.map((lang, i) => (
            <div key={i} className="lang-card">
              <img src={lang.image} className="lang-img" alt={lang.name} />
              <span className="lang-name">{lang.name}</span>
              <span className="lang-level">{lang.level}</span>
            </div>
          ))}
        </div>

        {/* LIKES */}
        <div className="likes-grid">
          <div className="like-card positive">
            <h3 className="like-card-title">Mes domaines de prédilection</h3>
            <p className="like-card-text">
              Le développement web, la conception d'algorithmes et la création d'applications — 
              des domaines où je m'investis avec enthousiasme.
            </p>
            <div className="tag-row">
              <span className="tag tag-green">Développement Web</span>
              <span className="tag tag-green">Algorithmes</span>
              <span className="tag tag-green">Applications</span>
            </div>
          </div>

          <div className="like-card negative">
            <h3 className="like-card-title">Moins ma tasse de thé</h3>
            <p className="like-card-text">
              Les infrastructures réseaux et la gestion des systèmes d'exploitation — 
              j'en comprends l'importance capitale, mais c'est moins ma passion.
            </p>
            <div className="tag-row">
              <span className="tag tag-light">Réseaux</span>
              <span className="tag tag-light">Systèmes d'exploitation</span>
            </div>
          </div>
        </div>

        {/* OTHER SKILLS */}
        <div className="other-card">
          <span className="card-number">+</span>
          <span className="page-label" style={{ animationDelay: '0s', opacity: 1 }}>Autres</span>
          <h2 className="section-title" style={{ animationDelay: '0s', opacity: 1 }}>Outils & technologies</h2>
          <div className="other-tags">
            {['Git', 'Bootstrap', 'Vue.js', 'React', 'Node.js', 'API REST', 'GraphQL'].map(t => (
              <span key={t} className="other-tag">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Competences