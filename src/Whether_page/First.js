import React, { Component } from 'react'
import './First.css'
import Last_com from './Last_com';
import Second from './Second';
import Small from './Small';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const s2 = {
    position: "relative",
    color: "red",
    top: "0px",
    left: '33px',
    fontSize: "20px",
}
const s3 = {
    borderRadius: "0px 20px 20px 0px",
    boxShadow: "1px 1px white",
    
    backgroundColor:"rgb(167, 224, 212)",
}
const s5 = {
    color: 'black',
    fontSize: "20px",
    marginRight: '2px',
}
export default class first extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clock: new Date(),
        };
    }
    componentDidMount() {
        setInterval(() => { this.setState({ clock: new Date() }) })
    }

    render() {
        return (
            <div className='p1'>
                <div className='para5'>
                    <div >
                        <h1 className="ab"><b>{this.state.clock.toLocaleTimeString()}</b></h1>
                        <p>{weekday[this.state.clock.getDay()]} , {month[this.state.clock.getMonth()]} {this.state.clock.getDate()} , {this.state.clock.getFullYear()}</p>
                    </div>
                    <div class="right item" style={{ paddingLeft: '800px' }}>
                        <i class="map marker alternate icon" style={s2}></i>
                        <input className='s4' type="text" placeholder="Search your city" />
                        <div class="ui button" style={s3}><i class="search link icon" style={s5}></i></div>
                    </div>
                </div>
                <div>
                    <div style={{float:"right"}}>
                    <Second/>
                    </div>
                    <Small/>
                </div>
                
            </div>




        )
    }
}