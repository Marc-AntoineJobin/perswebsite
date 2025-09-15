import ma_tronche from './assets/Ma_Tronche_coupee.png'

function Accueil() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="mb-4">
            <img 
              src={ma_tronche} 
              className="img-fluid rounded shadow" 
              style={{ maxWidth: '300px', height: 'auto' }} 
              alt="Marc-Antoine Jobin"
            />
          </div>
          <h1 className="display-4 mb-4">Marc-Antoine Jobin</h1>
        </div>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-md-8">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h2 className="card-title text-primary mb-4">Qui suis-je?</h2>
              <div className="mb-3">
                <p className="card-text fs-5">
                  Je suis un <strong>étudiant en informatique au Cégep de Sainte-Foy</strong>, 
                  qui adore apprendre des nouvelles technologies et qui cherche actuellement un 
                  <strong className="text-primary"> stage de fin d'études</strong> !
                </p>
              </div>
              
              <h5 className="mb-3">Mes passions :</h5>
              <div className="d-flex flex-wrap gap-2 mb-3 justify-content-center">
                <span className="badge bg-success fs-6 p-2">Randonnée</span>
                <span className="badge bg-primary fs-6 p-2">Soccer</span>
                <span className="badge bg-warning fs-6 p-2">Escalade</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card h-100 shadow-sm border-0 bg-info bg-opacity-10">
            <div className="card-body text-center">
              <h2 className="card-title text-info mb-3">Ce site est encore en développement!</h2>
              <div className="mt-3">
                <a 
                  href="https://github.com/Marc-AntoineJobin/perswebsite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-info btn-lg"
                >
                  Voir le repository
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card h-100 shadow-sm border-0 bg-primary bg-opacity-10">
            <div className="card-body text-center">
              <h3 className="card-title text-primary mb-3">À la recherche d'un stage</h3>
              <p className="card-text fs-5">
                Passionné par le développement et toujours prêt à apprendre de nouvelles technologies !
              </p>
              <div className="mt-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accueil