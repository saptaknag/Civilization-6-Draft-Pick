import React from "react";

function Button(props)
{
    let d=props.disabled;
    if(props.count>11 || props.selectStatus=="")
    d=1;
    return(
        <button style={{color:props.col}} onClick={props.onClick} disabled={d}>
            {props.text}
        </button>
    );
}

export default Button;