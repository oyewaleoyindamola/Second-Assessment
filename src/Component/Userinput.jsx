import React from 'react'

document.title ="User-Story"

// props was added here in order to be able to access the function in the App.js
const Userinput = (props) => {
  return (
    <div className='userInput'>
        <input type="text" onChange={props.nameChangerHandler}/>
    </div>
  )
}

export default Userinput