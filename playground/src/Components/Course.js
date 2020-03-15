import React from 'react';

// import Header from './Header.js';
// import Content from './Content.js';
// import Total from './Total.js';

const Header = ({ course }) => {
  // console.log("Header", course.name)
  
  return(
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = ({ course }) => {
  console.log("Content", course.parts.name)

  return(
    <>
      <Part part={course.parts.name} exercise={course.parts.exercise}/>
    </>
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

const Course = ({ courses }) => {
  const cat = () => courses.map( course =>
    <>
      {console.log("first", course)}
      <Header key={course.id} course={course} />
      {/* <Content key={course.parts.id} course={course} /> */}
    </>  
  )

  return (
  <>
    {/* {console.log("Course", courses[0].id)} */}
    {cat()}

    {/* <Header course={props.course.name}/> */}
    {/* <Content part={props.course.parts} /> */}
    {/* <Total part={props.course.parts} /> */}
  </>
  )
}

export default Course;