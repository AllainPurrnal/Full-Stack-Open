import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  if (props.feedbackVal === 0) {
    return (
      <div>
        <p>No feedback has been received 😭</p>
      </div>
    )
  }
  
  return (
    <>
      {console.log(props)}
      <p> Good: {props.goodVal} </p>
      <p> Neutral: {props.neutralVal} </p>
      <p> Bad: {props.badVal} </p>
      <p> All: {props.feedbackVal} </p>
      <p> Positive: {props.goodVal / props.feedbackVal} </p>
    </>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ feedback, setFeedback ] = useState(0)

  const goodFeedback = (good) => {
    setGood(good + 1)
    setFeedback(feedback + 1)
    // console.log("Good:", newFeedback)
  }

  const neutralFeedback = (neutral) => {
    setNeutral(neutral + 1)
    setFeedback(feedback + 1)
    // console.log("Neutral:", newFeedback)
  }

  const badFeedback = (bad) => {
    setBad(bad + 1)
    setFeedback(feedback + 1)
    // console.log("Bad:", newFeedback)
  }

  return (
    <div>
      <h1> Feedback! </h1>
        <button onClick={() => goodFeedback(good)} > Good </button>
        <button onClick={() => neutralFeedback(neutral)} > Neutral </button>
        <button onClick={() => badFeedback(bad)}> Bad </button>

      <h3> Stats </h3>
      <Statistics goodVal={good} neutralVal={neutral} badVal={bad} feedbackVal={feedback} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);