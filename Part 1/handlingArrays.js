import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)

  // Every click is stored into a separate piece of state called allClicks that is initialized as an empty array
  const [ allClicks, setAll ] = useState([])

  // When the left button is clicked, we add an L to the allClicks array
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  /*
  It's also possible to use the push method. If we add the item bu pushing it into the allClicks array and then updating the state, the application would still work.
    
    const handleLeftClick = () => {
      allClicks.push('L')
      setAll(allClicks)
      setLeft(left + 1)
    }
  
  However, don't do this! As mentioned previously, the state of React Components must not be mutated directly. Even if mutating state directly seems to work, it can
  lead to problems that are very hard to notice
  */
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}> left </button>
        <button onClick={handleRightClick}> right </button>
        {right}
        <p>{ allClicks.join(' ') }</p>
        {/* We call the join method for the allClicks array that joiins all of the items into a single string, separated by a space */}
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);