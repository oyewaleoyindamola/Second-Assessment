import React from 'react'

document.title ="User-Story"

const Userinput = (props) => {
  return (
    <div className='userinput-container'>
        <h1>User-Input</h1>
        <input type="text" id='userInput' />
    </div>
  )
}

export default Userinput