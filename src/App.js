import React, { Component } from 'react'
import Userinput from "./Component/Userinput";
import Useroutput from "./Component/Useroutput";
import "./App.css"

export default class App extends Component {
  // this is the initial stage
  state = {
    username: "Wura"
  }
  // this is the function that allows the user to input their desired name using the input tag
  nameChangerHandler = (e) =>{
    this.setState({
        username: e.target.value
    })
}

  render() {
    return (
      <div className='app'>
        <div className='container'>
        <Useroutput username={this.state.username}/> 
        <Userinput nameChangerHandler = {this.nameChangerHandler}/>
        </div>
      </div>
    )
  }
}



