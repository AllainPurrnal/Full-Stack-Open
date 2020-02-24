import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ clicks, setClicks ] = useState({
    left: 0, right: 0
  })

  // In practice, { ...clicks } creates a new object that has copies of all of the properties of the clicks object
  const handleLeftClick = () => 
    setClicks({...clicks, left: clicks.left + 1})

  const handleRightClick = () =>
    setClicks({...clicks, right: clicks.right + 1})
    // This creates a copy of the clicks object where the value of right property is increased by one

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}> left </button>
        <button onClick={handleRightClick}> right </button>
        {clicks.right}
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);