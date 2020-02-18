import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercises={props.exercise2}/>
      <Part part={props.part3} exercises={props.exercise3}/>
      {/* {console.log(props.parts)} */}
    </div>
  )
} 

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using Props To Pass Data',
      exercises: 7
    },
    {
      name: 'State of a Component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part1={parts[0].name} exercise1={parts[0].exercises} part2={parts[1].name} exercise2={parts[1].exercises} part3={parts[2].name} exercise3={parts[2].exercises}/>
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
      {/* {console.log(parts[0].name)} */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))