import React, { Component } from 'react'

export default class Welcome extends Component {
    constructor(){
        
        super();
        this.state={
            message:'Initial value for the message'
        }
    }
  render() {
    return (
      <div>{this.state.message}
      
      <button onClick={()=>{
        this.setState({
            message:'message is changed from a class component'
        })
      }}>Change</button>
      </div>
    )
  }
}
