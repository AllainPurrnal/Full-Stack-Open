import React from 'react';

import Header from './Header.js';
import Content from './Content.js';
import Total from './Total.js';

const Course = ({ course }) => {

  return (
  <>
    {console.log("Course", course.parts)}
    <Header course={course.name}/>
    <Content parts={course.parts} />
    {/* <Total part={course.parts} /> */}
  </>
  )
}

export default Course;