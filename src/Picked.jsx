import React from "react";

function Picked(props) {
    let p=props.par;
    return(
        <div className="Picked" style={{gridColumn: props.gridcolumn, gridRow: props.gridrow}}>
        <img src={require("./"+p[0].img).default} style={{display : "flex"}} alt={p[0].name}></img>
        <img src={require("./"+p[1].img).default} style={{display : "flex"}} alt={p[1].name}></img>
        <img src={require("./"+p[2].img).default} style={{display : "flex"}} alt={p[2].name}></img>
        </div>
    )
}

export default Picked;
