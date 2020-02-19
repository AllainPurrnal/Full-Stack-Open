import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ counter, setCounter ] = useState(0)

  // Double arrow functions can be thought of as functions that have to be called twice in order to get the final result.
  // The first function call is used to "configure" the second function, by defining some of its parameters.
  // By calling setToValue(5) we assign the value 5 to value and we're left with the following function
  // () => setCounter(5)
  const setToValue = (value) => () => setCounter(value)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={setToValue(counter + 1)}>
        plus
      </button>
      <button onClick={setToValue(0)}>
        zero
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);