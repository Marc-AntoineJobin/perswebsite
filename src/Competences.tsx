import mysql from './assets/mysql.png';
import java from './assets/java.svg';
import csharp from './assets/csharp.png';
import html from './assets/html.png';

function Competences() {
    const languages = [
        { name: 'Java', image: java, level: 'Avancé' },
        { name: 'C#', image: csharp, level: 'Intermédiaire' },
        { name: 'MySQL', image: mysql, level: 'Avancé' },
        { name: 'HTML/CSS', image: html, level: 'Avancé' }
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">Compétences</h1>
            
            <div className="row mb-5">
                <div className="col-12">
                    <h2 className="text-center mb-4">Langages préférés</h2>
                    <div className="row g-4 justify-content-center">
                        {languages.map((lang, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-3">
                                <div className="card h-100 text-center shadow-sm border-0 hover-card">
                                    <div className="card-body d-flex flex-column justify-content-center p-4">
                                        <div className="mb-3">
                                            <img 
                                                src={lang.image} 
                                                className="img-fluid rounded" 
                                                style={{ 
                                                    height: '80px', 
                                                    width: 'auto', 
                                                    maxWidth: '100%',
                                                    objectFit: 'contain'
                                                }} 
                                                alt={lang.name}
                                            />
                                        </div>
                                        <h5 className="card-title mb-2">{lang.name}</h5>
                                        <span className="badge bg-primary">{lang.level}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0 bg-success bg-opacity-10">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <h3 className="card-title text-success mb-0">J'aime</h3>
                            </div>
                            <p className="card-text fs-5">
                                Le développement web, d'algorithmes et d'applications
                            </p>
                            <div className="mt-3">
                                <span className="badge bg-success me-2">Développement Web</span>
                                <span className="badge bg-success me-2">Algorithmes</span>
                                <span className="badge bg-success">Applications</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0 bg-warning bg-opacity-10">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <h3 className="card-title text-warning mb-0">J'aime moins</h3>
                            </div>
                            <p className="card-text fs-5">
                                Les infrastructures réseaux, gérer les systèmes d'exploitation mais je comprends tout de même leur importance capitale
                            </p>
                            <div className="mt-3">
                                <span className="badge bg-warning me-2">Réseaux</span>
                                <span className="badge bg-warning">Systèmes d'exploitation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="card shadow-sm border-0 bg-light">
                        <div className="card-body text-center">
                            <h4 className="card-title mb-4">Autres compétences</h4>
                            <div className="d-flex flex-wrap justify-content-center gap-2">
                                <span className="badge bg-secondary fs-6 p-2">Git</span>
                                <span className="badge bg-secondary fs-6 p-2">Bootstrap</span>
                                <span className="badge bg-secondary fs-6 p-2">Vue.js</span>
                                <span className="badge bg-secondary fs-6 p-2">React</span>
                                <span className="badge bg-secondary fs-6 p-2">Node.js</span>
                                <span className="badge bg-secondary fs-6 p-2">API REST</span>
                                <span className="badge bg-secondary fs-6 p-2">GraphQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competences