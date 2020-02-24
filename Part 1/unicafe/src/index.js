import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

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
      <Statistic text="Good" value={props.goodVal} />
      <Statistic text="Neutral" value={props.neutralVal} />
      <Statistic text="Bad" value={props.badVal} />
      <Statistic text="All" value={props.feedbackVal} />
      <Statistic text="Positive" value={props.goodVal / props.feedbackVal} />
      {/* {console.log(props)} */}
    </>
  )
}

const Statistic = (props) => (
    <p> {props.text} {props.value}</p>
)

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
        <Button text="Good" onClick={() => goodFeedback(good)}/>
        <Button text="Neutral" onClick={() => neutralFeedback(neutral)} />
        <Button text="Bad" onClick={() => badFeedback(bad)} />

      <h3> Stats </h3>
      <Statistics goodVal={good} neutralVal={neutral} badVal={bad} feedbackVal={feedback} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);