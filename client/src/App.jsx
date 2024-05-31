import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import PersonalisedQuestionnaire from './components/PersonalisedQuestionnaire/PersonalisedQuestionnaire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WealthSimple FLEX App</h1>
      <PersonalisedQuestionnaire/>
    </>
  )
}

export default App
