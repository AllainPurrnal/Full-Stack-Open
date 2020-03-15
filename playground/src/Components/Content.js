import React from 'react';

import Part from './Part.js';

const Content = ({ course }) => {
  console.log("Content", course.parts.name)

  return(
    <>
      <Part part={course.parts.name} exercise={course.parts.exercise}/>
    </>
  )
}

export default Content;