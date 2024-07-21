'use client';
import React from 'react';
import images from '../../img'
import Style from './Video.module.css'
import Image from 'next/image'
const Video=()=>{
    return (
        <div className={Style.Video}>
          <div className={Style.Video_box}>
          <h1>
          <span>🎬The Videos</span>
            </h1>
            <p>Check out hottest videos? view more perspective on just about any topix.  </p>   
            <div className={Style.Video_box_frame}>  
            <div className={Style.Video_box_frame_left}>  
            <Image src={images.nft_Video}
            width={600}
            height={500} 
            style={{ objectFit: 'cover' }}
            className={Style.Video_box_frame_left_img}
            alt='video images'/>  
            </div>  
            <div className={Style.Video_box_frame_right}>hey</div>  
            </div> 
            </div>  
        </div>
    );
}

export default Video;