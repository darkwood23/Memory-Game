import Heading from './components/header'
import './App.css'
import Fetcher from './components/fetchingData'
import { useEffect, useState } from 'react'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [resetCalled, setResetCalled] = useState(false)
  const [prevScore, setPrevScore] = useState(null)

  const [levels, setLevels] = useState({
    "1": { score: 0, completed: false, endScore: 12 },
    "2": { score: 0, completed: false, endScore: 18 },
    "3": { score: 0, completed: false, endScore: 18 }
  })

  const [currentLevel, setCurrentLevel] = useState("1")

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

  const changeStage = () => {
    setLevels({...levels, [currentLevel]: {score, completed: true}})
    setScore(0)
    setPrevScore(0)
    setBestScore(0)
    setCurrentLevel((Number(currentLevel) + 1).toString())
  }

  const resetGame = () => {
    setLevels({
      "1": { score: 0, completed: false, endScore: 12 },
      "2": { score: 0, completed: false, endScore: 18 },
      "3": { score: 0, completed: false, endScore: 18 }
    })
    setCurrentLevel("1")
    setScore(0)
    setPrevScore(0)
    setBestScore(0)
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
  if ((currentLevel === "3") && (score === levels[currentLevel].endScore)) {
    return (
      <div className="screen">
        <h1>You Completed The Game!! 🎉</h1>
        <button onClick={resetGame} className='play-again'>Play Again?</button>
      </div>
    )
  } else if (score === levels[currentLevel].endScore) {

    return (
      <div className="screen">
        <h1>You Won!</h1>
        <button onClick={() => setScore(0)} className='play-again'>Play Again?</button>
        {levels["3"].completed ? (
          <h1>You completed the game, congrats!!</h1>
        ) : (
          <button onClick={changeStage} className='advance'>Advance to Level {Number(currentLevel) + 1}?</button>

        )}
      </div>
    )
  }


  return (
    <div id='all-elements'>
      <Heading bestPoints={bestScore} points={score} level={currentLevel}/>
      <Fetcher increment={increment} reset={reset} level={currentLevel} />
    </div>
  )
}

export default App
