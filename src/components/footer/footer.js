import React from 'react'

function Footer() {
    return (
        <div style={{backgroundColor: "#00141d"}}>
        <div style={{ margin: "0 10%", height: "0", borderTop: "1px solid greenyellow" }} />
        <div style={{ width: "100%", color: "greenyellow", display: "flex", textAlign:"center", justifyContent: "center", alignItems: "center", height: "50px" }}>
            <h4>
            &copy; 2022 Biotech Research Club, IIT Madras. All rights reserved.
            </h4>
        </div></div>
    )
}

export default Footer