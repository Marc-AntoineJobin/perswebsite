import ma_tronche from './assets/Ma_Tronche_coupee.png'
function Accueil() {
  return (
    <>
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ma_tronche} className='mt-2 rounded' style={{ maxWidth: '300px' }} alt="marc-Antoine Jobin"/>
        </a>
      </div>
      <h1>Marc-Antoine Jobin</h1>
      <div className="card">
      
      <p>
          <h2>Qui suis-je?</h2>
          <p>Je suis un étudiant en informatique au cégep de ste-foy, qui adore apprendre des nouvelles technologies et qui cherche actuellement un stage de fin d'études !</p>
          <p>Jaime beaucoup la randonnée, le soccer et l'escalade.</p>
          <h2>Ce site est encore en développement!</h2>

      </p>
            </div>
    </>
    )
}
export default Accueil