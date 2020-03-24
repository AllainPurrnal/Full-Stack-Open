import React from 'react';

import Part from './Part.js';

const Content = ({ parts }) => {

  let catPart = parts.map((item, id) =>
    <Part key={item.id} part={item.name} exercise={item.exercises} />
  )

  return(
    <>
      {/* {console.log("Content", parts)} */}
      {catPart}
    </>
  )
}

export default Content;