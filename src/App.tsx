import { useState } from 'react'
import ma_tronche from './assets/Ma_Tronche.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ma_tronche} className="portrait" alt="marc-Antoine Jobin" />
        </a>
      </div>
      <h1>Marc-Antoine Jobin</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR Test Test
        </p>
      </div>
    </>
  )
}

export default App
