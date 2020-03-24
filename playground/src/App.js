import React from 'react';

import Course from './Components/Course.js';

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          id: 1,
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          id: 2,
          name: 'Using Props To Pass Data',
          exercises: 7
        },
        {
          id: 3,
          name: 'State of a Component',
          exercises: 14
        }
      ],
      id: 0
    }
  ]

  let cat = courses.map((course, id) => 
    <Course key={course.id} course={course} />
  )

  return (
    <>
      {cat}
      {/* {console.log("App", course.id)} */}
    </>
  )
}

export default App;