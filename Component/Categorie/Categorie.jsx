'use client';
import React from 'react';
import Style from './Categorie.module.css'
import images from "../../img";
import Image from "next/image"
import { BsCircleFill } from 'react-icons/bs';
const Categorie=()=> {
    const CategoryArray=[images.creatorbackground1,images.creatorbackground2,images.creatorbackground3,images.creatorbackground4,images.creatorbackground5images];
    return (
        <div className={Style.box_category}>
            <div className={Style.category}>
            {CategoryArray.map((el,i)=>(
            <div className={Style.category_box} key={i+1}>
        <Image src={el} className={Style.category_box_img}
        alt="Background image" width={350} height={150} style={{ objectFit: 'cover' }}/>
            <div className={Style.category_box_title}>
            <span>
                <BsCircleFill/>
            </span>
            <div className={Style.category_box_title_info}>
                <h4>Entrainement</h4>
                <small>1994</small>
            </div>
            </div>
            </div>
        ))}
            </div>
        </div>
        
          );
}

export default Categorie;