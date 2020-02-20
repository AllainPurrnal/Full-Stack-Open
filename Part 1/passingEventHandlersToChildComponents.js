// Passing Event Handlers to Child Components

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// We're extracting the button into its own component
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
// The component gets the event handler function from the handleClick prop, and the text of the button from the text prop

const App = (props) => {
  const [ value, setValue ] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      {value}
      {/* Using the Button component is simple, although we have to make sure that we use the correct attribute names when passing props to the component */}
      <Button handleClick={() => setToValue(1000)} text="thousand"/>
      <Button handleClick={() => setToValue(0)} text="reset"/>
      <Button handleClick={() => setToValue(value + 1)} text="increment"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);