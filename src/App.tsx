import { useState } from 'react'
import './App.css'
import CatFacts from "./components/CatFacts.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <CatFacts count={count} setCount={setCount} />
  )
}

export default App
