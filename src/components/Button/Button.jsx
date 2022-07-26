import React from "react";
import s from "./Button.module.css"




export const Button = (props) =>{

    return(
        <button className={s.header__button + " " + props.class} onClick = {props.onClick}>{props.text}</button>
    )
}
