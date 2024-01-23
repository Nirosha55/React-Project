import React from 'react';

function Testing() {
    const date = new Date();
    const currentTime =date.getFullYear();

    let greeting;
let constomStyle = {
  color: "red"
}



    return(
    <div>
    <h1> {currentTime}</h1>
    <p style={constomStyle}>{greeting}This is my page:</p>
    </div>
    )
}

export default Testing;