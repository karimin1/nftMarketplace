'use client';
import { React,useState } from "react";
import Image from "next/image";
import {MdVerified} from "react-icons/md";
import { TiTick } from "react-icons/ti";
import images from '../../img';
import Style from "./FollowerTabCard.module.css"
const FollowerTabCard=({el,i})=> {
    console.log('{el,i}',{el,i})
    const [following,setFollowing]=useState(true);
    const followMe=()=>{
        if(following){
            setFollowing(false);
        }else{
            setFollowing(true);
        }
    }
    return (
        <div className={Style.FollowerTabCard}>
        <div className={Style.FollowerTabCard_rank}>
        <p>  #{i+1}<span>😍</span></p>
        </div>

        <div className={Style.FollowerTabCard_box}>
            <div className={Style.FollowerTabCard_box_img}>
            <Image className={Style.FollowerTabCard_box_img_img} 
            src={el.background||images.background} 
            alt="profil background" width={500} height={300}/>
            </div>
            <div className={Style.FollowerTabCard_box_profile}>
            <div className={Style.FollowerTabCard_box_profile_img}>
            <Image  
            alt="picture" width={100} height={100} src={el.user||images.user1}/>  
            </div>
            </div>
            <div className={Style.FollowerTabCard_box_info}>
            <div className={Style.FollowerTabCard_box_info_name}>
            <h4> 
            {el.seller.slice(0,9)} {''}{''}
            <span> <MdVerified/> </span> 
            </h4> 
            <p>{el.total||0}ETH</p> 
            </div>

            <div className={Style.FollowerTabCard_box_info_following}>
                {following?(
                    <a onClick={()=> followMe()}>
                        followed{""} <span><TiTick/></span>
                    </a>   
                ):(
                    <a onClick={()=>followMe()}>unfollow</a>
                )}
            </div>
            </div>
        </div>
        </div>
  
       
    )
}

export default FollowerTabCard;