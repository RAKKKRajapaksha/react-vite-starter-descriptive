import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>🚀 Hello Vite + React!</h1>
      <p>Edit <code>src/App.jsx</code> and save to test HMR</p>

      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </div>
  )
}

export default App
