import React from 'react'

const Useroutput = (props) => {
  return (
    <div className='userOutput'>
        <p>My name is {props.username} and i am a musician</p>
    </div>
  )
}

export default Useroutput