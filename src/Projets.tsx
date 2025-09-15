import TSQL from './assets/T-SQL.png'
import viteVue from './assets/viteVue.png'
import GraphQL from './assets/GraphQL.png'

function Projets() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">Projets (et bien d'autres)</h1>
            
            <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-img-top p-3">
                            <img 
                                src={TSQL} 
                                className="img-fluid rounded" 
                                alt="T-SQL"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Base de données</h5>
                            <p className="card-text flex-grow-1">
                                Création de requêtes complexes MySQL et T-SQL
                            </p>
                            <div className="mt-auto">
                                <span className="badge bg-primary me-2">MySQL</span>
                                <span className="badge bg-secondary">T-SQL</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-img-top p-3">
                            <img 
                                src={viteVue} 
                                className="img-fluid rounded" 
                                alt="Vue.js Application"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Application Vue.js</h5>
                            <p className="card-text flex-grow-1">
                                Création d'une application de gestion d'utilisateurs et de signalisation de bugs avec serveur Backend connecté
                            </p>
                            <div className="mt-auto">
                                <span className="badge bg-success me-2">Vue.js</span>
                                <span className="badge bg-warning">Vite</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-img-top p-3">
                            <img 
                                src={GraphQL} 
                                className="img-fluid rounded" 
                                alt="GraphQL API"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">API GraphQL</h5>
                            <p className="card-text flex-grow-1">
                                Création d'un API complexe avec BD, requête par filtres, authentification, etc.
                            </p>
                            <div className="mt-auto">
                                <span className="badge bg-info me-2">GraphQL</span>
                                <span className="badge bg-dark">API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projets