import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  // The function call adds state to the component and renders it initialized with the value of zero. The function returns an array that contains two items.
  // We assign the items to the variables counter and setCounter by using the destructuring assignment syntax shown earlier.
  // The counter variable is assigned the initial value of state which is zero.
  // The variable setCounter is assigned to a function that will be used to modify the state.
  
  setTimeout(
  () => setCounter(counter + 1),
  1000
  )
  // The application calls the setTimeout function and passes it two parameters: a function to increment the counter state and a timeout of one second.
  // Every time the setCounter modifies the state, it causes the component to re-render.
  // The value of the state will be incremented again after one second, and this will continue to repeat for as long as the application is running.

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);