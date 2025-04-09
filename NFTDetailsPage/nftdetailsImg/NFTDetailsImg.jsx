'use client';
import React,{useState,useEffect} from 'react';
import Image from 'next/image'
import { BsImages} from 'react-icons/bs'; 
import { TiArrowSortedDown,TiArrowSortedUp } from 'react-icons/ti';
//INTERNAL IMPORT
import images from '../../img'
import Style from './NFTDetailslmg.module.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {BiTransfer,BiDollar} from 'react-icons/bi'

const NFTDetailsImg=({nft})=> {
    const [description,setDescription]=useState(false);
    const[details,setDetails]=useState(false)
    const[like,setLike]=useState(false)
    const openDescription=()=>{
        console.log('description1',description)
            setDescription(!description)
            console.log('description2',description)
    }
    const openDetails=()=>{
        console.log('details1',details)
    setDetails(!details)
    console.log('details2',details)
    }
    const likeNFT=()=>{
            setLike(!like)
        }
    
    return (
    
        <div className={Style.NFTDetailsImg}>
            <div className={Style.NFTDetailsImg_box}>
                <div className={Style.NFTDetailsImg_box_NFT}>
                    <div className={Style.NFTDetailsImg_box_NFT_like}>
                     <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon}/>
                     <p onClick={()=>likeNFT()}>
                     {like ? (
                        <AiFillHeart  className={Style.NFTDetailsImg_box_NFT_like_icon}/>
                     ):<AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon}/>}
                     <span> 23 </span>
                     </p>
                    </div>
                    <div className={Style.NFTDetailsImg_box_NFT_img}>
                        <Image src={nft.image} 
                        alt="NFT image" 
                        className={Style.NFTDetailsImg_box_NFT_img_img}
                            width={700}
                            height={800}
                            objectFit='cover'
                        />
                    </div>
                </div>

                <div className={Style.NFTDetailsImg_box_description} 
                    onClick={()=>openDescription()}>
                    <p>Description</p>
                    {description?<TiArrowSortedUp/>:<TiArrowSortedDown/>}
                </div>
                {
                    description && (
                        <div className={Style.NFTDetailsImg_box_description_box}>
                        <p>{nft.description}</p> 
                        </div>
                    )
                }
                <div className={Style.NFTDetailsImg_box_details} 
                onClick={()=>openDetails()}>
                <p> Details</p>
                {details?<TiArrowSortedUp/>:<TiArrowSortedDown/>}
                </div>
             {details && ( 
                    <div className={Style.NFTDetails_box_details_box}>
                    <small>2000x2000 px.image(685kb)</small>
                    <p>
                    <small>
                    Contract Address
                    </small>
                   
                    <p>{nft.address}</p>
                    </p>
                    <p> <small>Token ID</small>
                    {nft.tokenId}</p>
                </div>
             )} 
            </div>
        </div>
    );
}

export default NFTDetailsImg