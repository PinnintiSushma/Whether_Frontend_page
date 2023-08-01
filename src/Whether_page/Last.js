import React, { Component } from 'react'
import rise from './sunrise.jpeg'
import set from './sunset.jpeg'
export default class Last extends Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
            <h2>--/--/-----</h2>
            <p style={{paddingLeft:"150px"}}>Max: --</p>
            <p style={{paddingLeft:"20px"}}>Min: --</p>
        </div>
        <div style={{display:"flex"}}>
            <img src={rise}width="40px" height="40px"style={{marginLeft:"70px"}}/><p style={{lineHeight:"33px",fontSize:"19px",paddingLeft:"6px"}}>----</p>
            <img src={set}width="40px" height="40px"style={{marginLeft:"150px"}}/><p style={{lineHeight:"33px",fontSize:"19px",paddingLeft:"6px"}}>----</p>
        </div>
      </div>
    )
  }
}
