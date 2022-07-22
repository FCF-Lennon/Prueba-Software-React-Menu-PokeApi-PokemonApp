
import React from "react";

const Button = (props) => {
    return (
        <button onClick={props.enviar}>{props.name}</button>
    )

};

export default Button;