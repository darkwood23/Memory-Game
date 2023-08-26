import Heading from './components/header'
import './App.css'
import Fetcher from './components/fetchingData'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const increment = () => {
    endStage()
    setScore(() => score + 1)
  }

  const endStage = () => {
    if (score >= bestScore) {
      setBestScore(score + 1)
    }
  }

  const reset = () => {
    setScore(() => 0)
  }

  return (
    <div id='all-elements'>
      <Heading bestPoints={bestScore} points={score}/>
      <Fetcher increment={increment} reset={reset} />
    </div>
  )
}

export default App
