import React from "react";

const Input = (props) => {

    return (
        <input type={props.tipo} onChange={props.enviar} placeholder={props.name}></input>
    )
};

export default Input;