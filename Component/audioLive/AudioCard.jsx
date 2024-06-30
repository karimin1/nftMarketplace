import {React,useState} from 'react';
import image from "../../img"
import Image from 'next/image'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import {TbPlayerPlay,TbPlayerPause} from 'react-icons/tb'
//INTERNAL IMPORT
import Style from './AusioCard.module.css'
import images from '../../img';
import { ST } from 'next/dist/shared/lib/utils';

 const AudioCard=() =>{
    const [like,setLike]=useState(false);
    const [play,setPlay]=useState(false);
    const likeNft=()=>{
        if(like==true){
            setLike(false);
        }else{
            setLike(true);
        }
    }
    const playMusic=()=>{
        if(playMusic){
            setPlay(false);

        }else{
            setPlay(true)
        }
    }
    return (
        <div className={Style.audioCard}>
            <div className={Style.audioCard_box}>
            
           
            <div className={Style.audioCard_box_like_time}>
            <div className={Style.audioCard_box_like} onClick={()=>likeNft()}>
     {
                like? (
              
                    <AiFillHeart className={Style.audioCard_box_like_icon}/> 
               
                ):(
                   
                    <AiOutlineHeart className={Style.audioCard_box_like_icon_unlike}/>
                  
                )
            }
            <span>24</span>
            </div>
            <div className={Style.audioCard_box_img}>
            <Image src={images.creatorbackground10} alt='background' width={200} height={200}/>

            </div>
        <div className={Style.audioCard_box_time}>
        <div className={Style.audioCard_box_like_time_remaing}>
        <small>Remainig time</small>
        <h5>3h:15m:20s</h5>
        </div>
        
        </div>
      
            </div>
            
             <div className={Style.audioCard_box_Player}>
             <Image src={images.musiceWave} alt='' width={200}/>
      
            <div className={Style.audioCard_box_musicPlayer} 
            onClick={()=>playMusic()}> 
            {play?(
                <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause/>
                </div>
            ):(
                <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause/>
                </div>
            )}
            </div>
            </div>
            </div>
          

            <div className={Style.audioCard_box_details}>
            <div className={Style.audioCard_box_details_info}>
            <h4> NFT music#1123 </h4>
            <div className={Style.audioCard_box_details_info_price}>
            <small> Price </small>  
            <p> $3,221.33 </p> 
            </div>
            </div>
            <div className={Style.audioCard_box_details_stock}>
        
            <small> 24 in stock </small>  
            </div>
            </div>
           
            </div> 
            
      
        
    );
}

export default AudioCard;