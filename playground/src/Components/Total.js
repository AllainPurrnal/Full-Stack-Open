import React from 'react';

const Total = ({ parts }) => {
  console.log("Total", parts)

  let total = parts.reduce((sum, {exercises}) => sum + exercises, 0)
  
  return (
    <>
      <p>
        Total of {total} exercises
      </p>
    </>
  )
}

export default Total;