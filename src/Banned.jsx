import React from "react";

function Banned(props) {
    let b=props.bar;
    return(
    <div className="Banned" style={{gridColumn: props.gridcolumn, gridRow: props.gridrow}}>
    <img src={require("./"+b[0].img).default} alt={b[0].name}></img>
    <img src={require("./"+b[1].img).default} alt={b[1].name}></img>
    <img src={require("./"+b[2].img).default} alt={b[2].name}></img>
    </div>
    )
}

export default Banned;
