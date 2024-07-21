import {React,useState} from 'react'
import Style from "./NFTCardTwo.module.css"
import { LikeProfile } from "../../Component/componentIndex";
import { BsImage } from 'react-icons/bs';
import  {MdVerified} from 'react-icons/md';
import Image from 'next/image';
import { MdTimer } from 'react-icons/md';

import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
    const  NFTCardTwo=({NFTData})=> {
     
    const [like,setLike]=useState(false);
    const[likeInc,setLikeInc]=useState(21);
    const LikeNFT=()=>{
        if(!like){
            setLike(true);
            setLikeInc(likeInc+1);
        }
        else{
            setLike(false);
            setLikeInc(likeInc-1);
        }
    }
    return (
        
        <div className={Style.NFTCardTwo}>
            {NFTData.map((el,i)=>(
                <div key={i+1} className={Style.NFTCardTwo_box}>
                    <div  className={Style.NFTCardTwo_box_like}>
                        <div className={Style.NFTCardTwo_box_like_box}> 
                            <div className={Style.NFTCardTwo_box_like_box_box}> 
                        
                                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon}/>
                                <p onClick={LikeNFT}> {like? <AiOutlineHeart/>:<AiFillHeart/>}{''} </p>
                                <span> {likeInc+1} </span>
                            </div>
                        </div> 
                        <div className={Style.NFTCardTwo_box_img}> 
                        <Image src={el} alt='NFT' width={500} height={500} className={Style.NFTCardTwo_box_img_img} objectFit="cover"/>
                        </div>  
                        <div className={Style.NFTCardTwo_box_info}>
                            <div className={Style.NFTCardTwo_box_info_left}> </div>
                            <LikeProfile/>
                            <p> Clone # {i+1}</p>
                        
                    <small> Clone # {i+2}</small>
                    </div>
                    </div>
                    <div className={Style.NFTCardTwo_box_price}>
                        <div  className={Style.NFTCardTwo_box_price_box}>
                        <small>Current Bid</small>
                        <p> 1{i+5}.000 ETH</p>
                        </div>
                        <p className={Style.NFTCardTwo_box_price_stock}>
                        <MdTimer/>  <span>{i+1} hours left</span>
                        </p>
                    </div>
                </div>
              
           ))} 

        </div>
    );
}

export default NFTCardTwo;