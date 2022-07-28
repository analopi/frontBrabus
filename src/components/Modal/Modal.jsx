import React, { useState } from "react";
import { useCallback } from "react";
import s from "./Modal.module.css"
import Shake from 'react-reveal/Shake';
import Fade from 'react-reveal/Fade';




export const Modal = (props) => {
    

    return (
        <div>
        {props.viewModal &&
        <Fade when={props.animForModal} onClick={() => {props.setAnimForModal(false); setTimeout(() => {props.setViewModal(false)}, 1000)}}>
        <div className={s.isActive} onClick={() => {props.etAnimForModal(false); setTimeout(() => {props.setViewModal(false)}, 1000)}} >
            <div className={s.wrapper} onClick={() => {props.setAnimForModal(false); setTimeout(() => {props.setViewModal(false)}, 1000)}}></div>
            <div className={s.back__blur} onClick={() => {props.setAnimForModal(false); setTimeout(() => {props.setViewModal(false)}, 1000)}}></div>
            <p onClick={() => {props.setAnimForModal(false); setTimeout(() => {props.setViewModal(false)}, 1000)}}>Успешно</p>
        </div>
        </Fade>}
        </div>
    )
}
