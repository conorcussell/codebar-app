import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import questions from './questions'

function ImageButton({ text, onClick, image }) {
  return (
    <button onClick={() => onClick(text)}>
      {/* <img src={image} /> */}
      {text}
    </button>
  )
}

// let question = questions[0]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState(null)

  const question = questions[currentQuestion]

  function onClick(text) {
    if (question.correctAnswer === text) {
      setAnswer('Yay!')

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      }
    } else {
      setAnswer('Incorrect')
    }
  }

  return (
    <div className="App">
      <h1>{question.questionText}</h1>

      {question.answers.map(answer => (
        <ImageButton
          text={answer.text}
          image={answer.image}
          onClick={onClick}
        />
      ))}

      {answer && <h1>{answer}</h1>}
    </div>
  )
}

export default App
