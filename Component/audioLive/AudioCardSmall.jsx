'use client';
import {React,useState} from 'react'
import  Style from './AudioCardSmall.module.css'
import { GiCaptainHatProfile } from "react-icons/gi";
import images from "../../img" 
import Image from "next/image"
import { LikeProfile } from '../componentIndex';
import {TbPlayerPlay,TbPlayerPause} from 'react-icons/tb'
const AudioCardSmall=()=> {
    const [play,setPlay]=useState(false);
    const playMusic=()=>{
        if(play){
            setPlay(false);
        }else{
            setPlay(true);
        }
    }
    return (
        <div className={Style.audioPlayer}>
        <div className={Style.audioPlayer_box}>
        <Image src={images.creatorbackground1} alt="music"
        width={100}
        height={100} className={Style.audioPlayer_box_info}/>
    
           
            
            <div className={Style.audioPlayer_box_info_box}>
            <h4>NFT music #1142</h4>
            <LikeProfile/>
            <div className={Style.audioPlayer_box_info_box_price}>
         
            <small>Price</small>
            <p>1.00eth</p>
            </div>
          
            </div>
            <div className={Style.audioPlayer_box_playBtn}
          
          onClick={()=>playMusic()}>
              {play?<TbPlayerPause/>:<TbPlayerPlay/> }
          </div>
            
           
        </div>
        </div>
    );
}

export default AudioCardSmall;