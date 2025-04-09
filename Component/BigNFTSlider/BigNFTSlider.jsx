'use client';
import React,{useState, useEffect,useCallback} from "react";
import Image from "next/image"
import  {AiFillFire, AiFillHeart} from "react-icons/ai"
import {MdVerified,MdTimer}from "react-icons/md";
import {TbArrowBigLeftLines,TbArrowBigRightLines}from 'react-icons/tb';
//INTERNAL IMPORT
import images from '../../img'
import Button from '../button/Button'
import Style from "./BigNFTSlider.module.css"
const BigNFTSlider=()=>{
    const [idNumber,setIdNumber]=useState(1);
    const sliderData=[
        {
            title:"Hello NFT",
            id:1,
            name:'said karim',
            collection:"Gym",
            price:"0000006  eth",
            like:243,
            image:images.user1,
            nftImage:images.nft_image_1,
            time:{
                days:27,
                hours:10,
                minutes:11,
                seconds:35,
            },
        }
        ,{
            title:"BODY NFT",
            id:2,
            name:'hind Hussain',
            collection:"love",
            price:"00000332 eth",
            like:114,
            image:images.user2,
            nftImage:images.nft_image_2,
            time:{
                days:33,
                hours:5,
                minutes:22,
                seconds:47,
            },
        },
        {
            title:"SPEAK NFT",
            id:3,
            name:'kawtar Hussain',
            collection:"maroc",
            price:"0,225  eth",
            like:2665,
            image:images.user3,
            nftImage:images.nft_image_3,
            time:{
                days:44,
                hours:8,
                minutes:33,
                seconds:22,
            },
        },
        {
            title:"Hello NFT",
            id:4,
            name:'leila chahmi',
            collection:"SWIMMING",
            price:"000099  eth",
            like:23,
            image:images.user4,
            nftImage:images.nft_image_3,
            time:{
                days:33,
                hours:1,
                minutes:22,
                seconds:395,
            },
        }
    ];
    //-----INC
    const inc=useCallback(()=>{
        if(idNumber+1<sliderData.length){
            setIdNumber(idNumber+1);
        }
    },[idNumber,sliderData.length]
);
const dec=useCallback(()=>{
    if(idNumber>0){
        setIdNumber(idNumber-1);
    }
},[idNumber]);

    return (
        <div  className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <Image className={Style.bigNFTSlider_box_left_creator_profile_img}
                        src={sliderData[idNumber].image}
                        alt="profile image"
                        width={50} height={50}/>
                        <div className={Style.total_info}>
                            <div className={Style.bigNFTSlider_box_left_creator_profile_info }>
                                <p>Creator</p>
                                <h4>{sliderData[idNumber].name} {""}
                                    <span><MdVerified/></span>
                                </h4>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_creator_collection}>
                                <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon}/>
                                <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                    <p>Collection</p>
                                    <h4>{sliderData[idNumber].collection}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                    <small>Current Bid</small> 
                    <p>{sliderData[idNumber].price}
                    <span>$221,21</span> 
                    </p> 
                    </div>  
                    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}/>
                            <span>Auction ending</span>
                    </p>
               
                </div>
                <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                        <p>{sliderData[idNumber].time.days}</p>
                        <span>Days</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                        <p>{sliderData[idNumber].time.hours}</p>
                        <span>Hours</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                        <p>{sliderData[idNumber].time.minutes}</p>
                        <span>mintues</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                        <p>{sliderData[idNumber].time.seconds}</p>
                        <span>seconds</span>
                        </div>
                        
                </div>
                <div className={Style.bigNFTSlider_box_left_button}>
                        <Button btnName="Place" handleClick={()=>{}}/>
                        <Button btnName="View" handleClick={()=>{}}/>
                </div>
                <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                <TbArrowBigRightLines className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                    onClick={()=>dec()}
                />
                <TbArrowBigRightLines className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                    onClick={()=>inc()}
                />
                </div>
                
                </div>
                
            <div className={Style.bigNFTSlider_box_right}>
                <div className={Style.bigNFTSlider_box_right_box}>
                    <Image src={sliderData[idNumber].nftImage} alt="NFT IMAGE" className={Style.bigNFTSlider_box_right_box_img}/>
                    <div className={Style.bigNFTSlider_box_right_box_like}>
                    <AiFillHeart/>
                    <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default BigNFTSlider;