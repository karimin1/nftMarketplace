'use client';
import React from 'react';
import Image from 'next/image'
import images from '../../img'
import Style from './LikeProfile.module.css'
 
const LikeProfile=()=>{
    const imageArray=[images.user1,images.user2,images.user3,images.user4];
    return (
        <div className={Style.like}> 
            {imageArray.map((el,i)=>(
                <div className={Style.like_box} key={i+1}> 
                <Image src={el} className={Style.like_box_img}
                 width={15} heigh={15} key={i+1}/>
                </div>
        ))}
        </div>
    );
}

export default LikeProfile;