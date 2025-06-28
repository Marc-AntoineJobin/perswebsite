import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Apropos from './Apropos'
import Competences from './Competences'
import Projets from './Projets'
import Accueil from './Accueil'
import './App.css'

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark dark-green ps-5">
          <div className="container-fluid">
            <a className="navbar-brand ps-5" href="#">Marc-Antoine Jobin</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? " text-white" : "")}
                    to="/"
                    end
                  >
                    Accueil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? " text-white" : "")}
                    to="/apropos"
                  >
                    À propos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? " text-white" : "")}
                    to="/competences"
                  >
                    Compétences
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? " text-white" : "")}
                    to="/projets"
                  >
                    Projets
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={ <Accueil/>} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </Router>
      <footer className="mt-auto py-3 bg-light text-center">
      Repository: <a href="https://github.com/Marc-AntoineJobin/perswebsite" target="_blank" rel="noopener noreferrer">
      https://github.com/Marc-AntoineJobin/perswebsite
      </a>
      <br />
      Marc-Antoine Jobin, 2025
      </footer>
    </div>
  )
}

export default App