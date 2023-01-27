import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './features/counter/Counter'
function App() {
  const [count, setCount] = useState(0)

  return <>
    <h1>Hi</h1>
    <Counter/>
  </>
}

export default App
