import ma_tronche from './assets/Ma_Tronche_coupee.png'

function Accueil() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 via-white to-green-100 p-6">
      
      {/* Image avec hover effect */}
      <div className="relative group">
        <a href="https://vitejs.dev" target="_blank">
          <img 
            src={ma_tronche} 
            alt="Marc-Antoine Jobin"
            className="w-56 h-56 rounded-full shadow-lg border-4 border-cyan-300 transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      </div>

      {/* Nom */}
      <h1 className="text-4xl font-bold text-gray-800 mt-6">
        Marc-Antoine Jobin
      </h1>
      <p className="text-gray-600 italic">Étudiant en informatique • Cégep de Ste-Foy</p>

      {/* Carte de présentation */}
      <div className="card bg-white shadow-xl rounded-2xl mt-8 p-6 max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Qui suis-je ?</h2>
        <p className="text-gray-700 mb-2">
          Je suis un étudiant en informatique au cégep de Ste-Foy, passionné par 
          les nouvelles technologies et actuellement à la recherche d’un stage de fin d’études.
        </p>
        <p className="text-gray-700 mb-4">
          J’aime beaucoup la <span className="font-semibold">randonnée</span>, le <span className="font-semibold">soccer</span> 
          et l’<span className="font-semibold">escalade</span>.
        </p>
        
        <h2 className="text-xl font-semibold text-green-700">🚧 Ce site est encore en développement !</h2>
      </div>
    </div>
  )
}

export default Accueil