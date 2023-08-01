import React from 'react';
import Ex3 from './Ex3';
import rise from './sunrise.jpeg'
import set from './sunset.jpeg'
function Tom({ name, name1, name2, name3 }) {
    return <div >
        <div style={{ display: "-webkit-inline-flex", paddingLeft: name2 }}>
            <div style={{ display: "flex" }}>
                <img src={name3} width="70px" height="70px" style={{ borderRadius: "10px", marginTop: "20px" }} />
                <div style={{ paddingTop: "20px", paddingLeft: "13px" }}>
                    <h3 style={{ lineHeight: "20px" }}>{name}</h3>
                    <p>{name1}</p>
                </div>
            </div>
        </div>
    </div>;
}
function Ex2() {
    const s_data = [
        { name: 'Sunrise', name1: "-----", name2: "60px", name3: rise },
        { name: 'Sunset', name1: "-----", name2: "180px", name3: set },
    ];
    return (
        <div style={{ width: "600px", height: "415px", border: "none",padding:"10px", borderRadius: "10px", backgroundColor: "rgb(220, 236, 240)", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <center><h1>Current Whether</h1></center>
            <i class="map marker alternate icon" style={{ fontSize: "20px", color: "red" }}></i>-------<br />
            <div style={{ display: "flex" }}>
                {s_data.map((data, index) => (
                    <Tom key={index} name={data.name} name1={data.name1} name2={data.name2} name3={data.name3} />
                ))}
            </div>

            <div style={{ display: "flex", marginTop: "20px" }}>
                <Ex3 name="Wind Speed: --km/h" name2="180px" name3="100px" />
                <Ex3 name="Wind Degree: --km/h" name2="180px" name3="11px" />
            </div>
            <div style={{ display: "flex", marginTop: "20px" }}>
                <Ex3 name="Wind Direction: ---" name2="150px" name3="130px" />
                <Ex3 name="Humidity: ---" name2="150px" name3="11px" />
            </div>
            <div style={{ display: "flex", marginTop: "20px" }}>
                <Ex3 name="Latitude: ----" name2="140px" name3="140px" />
                <Ex3 name="Longitude: ----" name2="140px" name3="11px" />
            </div>
            <div style={{ marginLeft: "180px", marginTop: "20px" }}>
                <Ex3 name="Local Time: -------" name2="180px" name3="11px" />
            </div>
        </div>


    );
}

export default Ex2;
