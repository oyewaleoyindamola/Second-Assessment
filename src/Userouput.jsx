import React from 'react'

const Userouput = (props) => {
  return (
    <div>
        <h1>User Output</h1>
        {/* This is the Paragraph for the useroutput */}
        <p>{props.p1}</p>
        <p>{props.p2}</p>
    </div>
  )
}

export default Userouput