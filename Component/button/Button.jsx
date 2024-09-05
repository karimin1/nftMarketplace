import React from 'react';
import Style from './Button.module.css'
//INTERNAL IMPORT
const Button=({btnName,handleClick,icon,classStyle})=> {
    return (
        <div className={Style.box}>
     <button className={Style.button}kkkkk 
     onClick={()=>handleClick()}>
     {icon} {btnName} 
     </button>
        </div>
    );
};

export default Button;