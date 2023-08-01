import React, { Component } from 'react'
import rise from './sunrise.jpeg'
const s_data = [{
    id: 1,
    n1: "Sunrise",
    n2: "----",
},
{
    id: 1,
    n1: "Sunrise",
    n2: "----",
},
]
export default class third extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1>Current Whether</h1>
                </center>
                <i class="map marker alternate icon"></i>----<br />
                <div>
                    {
                        s_data.map((item) => {
                            return <div key={item.id} style={{display:"-webkit-inline-flex",paddingLeft:"100px"}}>
                                <div style={{ display: "flex" }}>
                                    <img src={rise} width="70px" height="70px" />
                                    <div style={{ paddingTop: "20px", paddingLeft: "13px" }}>
                                        <h3 style={{ lineHeight: "1px" }}>{item.n1}</h3>
                                        <p>{item.n2}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
        )
    }
}
