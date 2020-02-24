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
      <Part part={props.part[0].name} exercise={props.part[0].exercises}/>
      <Part part={props.part[1].name} exercise={props.part[1].exercises}/>
      <Part part={props.part[2].name} exercise={props.part[2].exercises}/>
  
      {/* {console.log(props.part[0].name)} */}
      {/* {console.log(props.part[0].exercises)} */}
    </div>
  )
} 

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.parts} />
      <Total part={course.parts}/>
      {/* {console.log(parts)} */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))