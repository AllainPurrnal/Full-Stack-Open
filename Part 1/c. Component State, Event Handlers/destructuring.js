import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// The props that are passed to the component are now directly destructured into variables name and age.
// Instead of assigning the entire props object into a variable called props and then assigning its properties into the variables name and age,
// we assign the values of the properties directly to variables by destructuring the props object that is passed to the component function as a parameter
const Hello = ({name, age}) => {
  
  // If an arrow function consists of a single command, then the function body does not need to be written inside of curly braces.
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));