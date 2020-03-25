import React from 'react';

import Course from './Components/Course.js';

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using Props To Pass Data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a Component',
          exercises: 14,
          id: 3
        }
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  let cat = courses.map((course, id) => 
    <Course key={course.id} course={course} />
  )

  return (
    <>
      <h1> Web Development Curriculum</h1>
      {cat}
    </>
  )
}

export default App;