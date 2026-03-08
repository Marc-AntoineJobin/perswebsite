import TSQL from './assets/T-SQL.png'
import viteVue from './assets/viteVue.png'
import GraphQL from './assets/GraphQL.png'
import sherbaScreenshot from './assets/sherba_screenshot.png'

const styles = `
  .projets-wrapper {
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

  .page-subtitle {
    font-size: 14px;
    font-weight: 300;
    color: #8A8A8A;
    margin-top: 12px;
    letter-spacing: 0.05em;
    animation: fadeUp 0.6s ease forwards;
    opacity: 0;
    animation-delay: 0.15s;
  }

  /* PROJECTS GRID */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .project-card {
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.07);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    animation: fadeUp 0.7s ease forwards;
    opacity: 0;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .project-card:hover {
    box-shadow: 0 12px 40px rgba(0,0,0,0.1);
    transform: translateY(-4px);
  }

  .project-card:nth-child(1) { animation-delay: 0.1s; }
  .project-card:nth-child(2) { animation-delay: 0.2s; }
  .project-card:nth-child(3) { animation-delay: 0.3s; }

  .project-img-wrap {
    position: relative;
    overflow: hidden;
    height: 200px;
    background: #F5F0E8;
  }

  .project-img-wrap::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 60px;
    background: linear-gradient(to top, #FFFFFF, transparent);
    pointer-events: none;
  }

  .project-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, filter 0.5s ease;
    filter: grayscale(10%);
  }

  .project-card:hover .project-img-wrap img {
    transform: scale(1.04);
    filter: grayscale(0%);
  }

  .project-body {
    padding: 28px 32px 32px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .project-number {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #C8A96E;
    margin-bottom: 10px;
    display: block;
  }

  .project-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #1A1A1A;
    margin: 0 0 12px 0;
    line-height: 1.2;
  }

  .project-desc {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    line-height: 1.75;
    flex: 1;
    margin-bottom: 20px;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .project-tag {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1A1A1A;
    border: 1px solid rgba(0,0,0,0.15);
    padding: 5px 12px;
    border-radius: 2px;
    background: transparent;
    transition: all 0.2s ease;
  }

  .project-tag:hover {
    background: #1A1A1A;
    color: #F5F0E8;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #F5F0E8;
    background: #1A1A1A;
    border: 1px solid #1A1A1A;
    padding: 9px 18px;
    border-radius: 2px;
    text-decoration: none;
    margin-bottom: 16px;
    transition: all 0.25s ease;
    align-self: center;
  }

  .project-link:hover {
    background: #C8A96E;
    border-color: #C8A96E;
    color: #1A1A1A;
    gap: 12px;
  }

  /* DIVIDER */
  .project-card-divider {
    height: 3px;
    background: #C8A96E;
    width: 32px;
    margin-bottom: 20px;
    transition: width 0.3s ease;
  }

  .project-card:hover .project-card-divider {
    width: 64px;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 900px) {
    .projects-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 640px) {
    .projets-wrapper { padding: 48px 20px; }
    .projects-grid { grid-template-columns: 1fr; }
    .project-body { padding: 24px 24px 28px; }
  }
`

const projects = [
  {
    image: sherbaScreenshot,
    alt: 'Sherba',
    number: '01',
    title: 'Sherba',
    desc: "Application mobile pour faciliter la recherche de logement. Cela inclut des fonctionnalités de colocation, de recherche de logements directement intégrées à l'appli recueillies automatiquement en ligne sur des sites comme logisQuébec ou Centris.",
    tags: ['React', 'Node.js', 'WebSocket'],
    link: 'https://www.canva.com/design/DAHC0nMGqks/Y6tXeQQmaDgAym2CIS-YHA/edit'
  },
  {
    image: TSQL,
    alt: 'T-SQL',
    number: '02',
    title: 'Base de données',
    desc: "Création de requêtes complexes MySQL et T-SQL pour des cas d'usage avancés.",
    tags: ['MySQL', 'T-SQL']
  },
  {
    image: viteVue,
    alt: 'Vue.js Application',
    number: '03',
    title: 'Application Vue.js',
    desc: "Application de gestion d'utilisateurs et de signalisation de bugs avec un serveur backend connecté.",
    tags: ['Vue.js', 'Vite']
  },
  {
    image: GraphQL,
    alt: 'GraphQL API',
    number: '04',
    title: 'API GraphQL',
    desc: "API complexe avec base de données, requêtes par filtres, authentification et bien plus.",
    tags: ['GraphQL', 'API']
  }
]

function Projets() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="projets-wrapper">

        <header className="page-header">
          <span className="page-label">Portfolio</span>
          <h1 className="page-title">Projets</h1>
          <p className="page-subtitle">Une sélection — et bien d'autres à venir.</p>
        </header>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-img-wrap">
                <img src={p.image} alt={p.alt} />
              </div>
              <div className="project-body">
                <span className="project-number">{p.number}</span>
                <div className="project-card-divider" />
                <h2 className="project-title">{p.title}</h2>
                <p className="project-desc">{p.desc}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Voir le projet →
                  </a>
                )}
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Projets