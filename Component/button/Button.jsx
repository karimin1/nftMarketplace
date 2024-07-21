'use client';
import React from 'react';
import Style from './Button.module.css'
//INTERNAL IMPORT
const Button=({btnName,handleClick})=> {
    return (
        <div className={Style.box}>
     <button className={Style.button} onClick={()=>handleClick()}>{btnName}</button>
        </div>
    );
};

export default Button;