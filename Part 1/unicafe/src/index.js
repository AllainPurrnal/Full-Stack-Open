import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  return (
    <>
      {console.log(props)}
      <p> Good: {props.goodVal} </p>
      <p> Neutral: {props.neutralVal} </p>
      <p> Bad: {props.badVal} </p>
    </>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const goodFeedback = (newFeedback) => {
    setGood(newFeedback)
    // console.log("Good:", newFeedback)
  }

  const neutralFeedback = (newFeedback) => {
    setNeutral(newFeedback)
    // console.log("Neutral:", newFeedback)
  }

  const badFeedback = (newFeedback) => {
    setBad(newFeedback)
    // console.log("Bad:", newFeedback)
  }

  return (
    <div>
      <h1> Feedback! </h1>
        <button onClick={() => goodFeedback(good + 1)} > Good </button>
        <button onClick={() => neutralFeedback(neutral + 1)} > Neutral </button>
        <button onClick={() => badFeedback(bad + 1)}> Bad </button>

      <h3> Stats </h3>
      <Statistics goodVal={good} neutralVal={neutral} badVal={bad}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);