'use client';
import react from "react"
import Style from './SliderCard.module.css'
import {motion} from "framer-motion";
import Image from 'next/image'
import { LikeProfile } from "../componentIndex";
const SliderCard=({el,i})=>{
    return(
        
        <motion.div className={Style.sliderCard}>
        
       <div className={Style.sliderCard_box}>
       <motion.div className={Style.sliderCard_box_img}>
       <Image src={el.background} className={Style.sliderCard_box_img_img} alt='slide' width={300} height={200}
       style={{ objectFit: 'cover' }} />
       </motion.div>
       <div className={Style.sliderCard_box_title}>
       <p>NFT Videos</p>
       <p className={Style.sliderCard_box_title_like}>
       {/* <LikeProfile/> */}
       <small>1 of 100 </small>
       </p>
       </div>
       <div className={Style.sliderCard_box_price}>
       <div className={Style.sliderCard_box_price_box}>
       <small>Current Bid</small>
       <p>1.000 eth</p>
        </div>
        <div className={Style.sliderCard_box_price_time}>
        <small>Remaing time</small>
        <p>3h :15m:20s</p>
       </div>
       </div>
       </div>
        </motion.div>
    )
}
export default SliderCard