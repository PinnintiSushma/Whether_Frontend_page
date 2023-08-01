import React, { Component } from 'react'
import sun from './sunny.webp'
import './Second.css'
const mat_data = [{
    id: 1,
    im: sun,
},]
const box_data = [{
    id: 1,
    l1: "----",
    l2: "-----",
    l3: "-----",
    l4: "-----",
}]
export default class Second extends Component {
    render() {
        return (
            <div>
                {
                    mat_data.map((item) => {
                        return <div className='whole' key={item.id}>
                            <div className='is'>
                                <i class="map marker alternate icon"></i>----<br />
                                <center>
                                    <img src={item.im} width="140px" height="140px" className='t1' /><hr/>
                                    <p className='t3'><b>--</b></p>
                                </center>
                            </div>
                        </div>
                    })
                }
                <div>
                    {
                        box_data.map((item) => {
                            return <div key={item.id} className='t0'>
                                <div style={{ display: "flex" }}>
                                    <h3>Location:</h3><p className='all'>{item.l1}</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <h3>Region:</h3><p className='all'>{item.l2}</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <h3>Country:</h3><p className='all'>{item.l3}</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <h3>TimeZone:</h3><p className='all'>{item.l4}</p>
                                </div>
                            </div>


                        })
                    }
                </div>
            </div>
        )
    }
}
