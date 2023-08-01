import React from 'react';
import Ex2 from './Ex2';
import Last_com from './Last_com';
import Second from './Second';


function Box({ name, name1, name2, color }) {
  const style = {
    backgroundColor: color,
    marginTop: '30px',
    marginLeft: '10px',
    padding: '5px',
    width: '90px',
    height: "100px",
    borderRadius: '10px',
    color: 'white',
    marginRight: "54px",
    border: 'none',
  };

  return <div style={style}>
    <center>
      <p>{name}</p>
      <p>{name1}</p>
    </center>
    <center>
      <p style={{ fontSize: "25px" }}>{name2}</p>
    </center>
  </div>;
}

function Small() {
  const boxData = [
    { name: '12:00 AM', name1: "MIDNIGHT", name2: "--", color: '#1a2238' },
    { name: '04:00 AM', name1: "MORNING", name2: "--", color: '#425664' },
    { name: '08:00 AM', name1: "MORNING", name2: "--", color: '#fab162' },
    { name: '12:00 PM', name1: "MIDDAY", name2: "--", color: '#fb9039' },
    { name: '04:00 PM', name1: "NOON", name2: "--", color: '#fab162' },
    { name: '08:00 PM', name1: "EVENING", name2: "--", color: '#425664' },
    { name: '11:00 PM', name1: "NIGHT", name2: "--", color: '#566e7f' },
  ];

  return (
    
    <div>
    <div style={{ display: "flex" }}>
      {boxData.map((data, index) => (
        <Box key={index} name={data.name} name1={data.name1} name2={data.name2} color={data.color} />
      ))}
      </div>
      
        <div style={{marginTop:"40px",display:"flex"}}>
          <div>
          <Last_com/>
          </div>
          <div style={{marginLeft:"70px"}}>
          <Ex2/>
          </div>
          
          
    </div>
    
    </div>

  );
}

export default Small;
