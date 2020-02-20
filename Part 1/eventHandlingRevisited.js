// Event Handling Revisited

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Using Functions to return Functions
const App = (props) => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

// Using normal Functions
const App = (props) => {
  const [ value, setValue ] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>thousand</button>
      <button onClick={() => setToValue(0)}>reset</button>
      <button onClick={() => setToValue(value + 1)}>increment</button>
    </div>
  )
}

// Choosing between the two presented ways of defining your event handlers is mostly a matter of taste.

ReactDOM.render(
  <App />,
  document.getElementById('root')
);