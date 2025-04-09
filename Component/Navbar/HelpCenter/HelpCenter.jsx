'use client';
import React from "react";
import Link from  "next/link";
import Style from "./HelpCenter.module.css";
import Image from "next/image";

const HelpCenter=()=>{
    const HelpCenter=[
        {name:"About",
        link:"about"
        },
        {name:"Contact Us",
        link:"Contact Us"
        },
        {name:"Sign Up",
        link:"about"
        },
        {name:"Subscription",
        link:"Subscription"}
    ]
     return(
        <div className={Style.box}>
            {HelpCenter.map((el,i)=>(
                <div  key={i+1} className={Style.HelpCenter}>
                <Link href={{pathname:`${el.link}`}}> {el.name}</Link>
                </div>
            ))}
        </div>
     )
}
export default HelpCenter;