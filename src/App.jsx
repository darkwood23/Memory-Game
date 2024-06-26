import Heading from './components/header'
import './App.css'
import Fetcher from './components/fetchingData'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [resetCalled, setResetCalled] = useState(false)
  const [prevScore, setPrevScore] = useState(null)

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
    setPrevScore(score)
    setScore(() => 0)
    setResetCalled(true)
  }

  if (resetCalled) {
    return (
      <div className="screen">
        <h1>You Lost!</h1>
        <h3>Your score was {prevScore}</h3>
        <h3>Your best score is {bestScore}</h3>
        <button onClick={() => setResetCalled(false)} className='play-again'>Play Again</button>
      </div>
    )
  }

  if (score === 12) {
    return (
      <div className="screen">
        <h1>You Won!</h1>
        <button onClick={() => setScore(0)} className='play-again'>Play Again</button>
      </div>
    )
  }

  return (
    <div id='all-elements'>
      <Heading bestPoints={bestScore} points={score}/>
      <Fetcher increment={increment} reset={reset} />
    </div>
  )
}

export default App
