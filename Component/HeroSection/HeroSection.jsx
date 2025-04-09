'use client';
import React,{useContext,useState} from 'react';
import Image  from "next/image";
//IMPORT INTERNAL
import Style from "./HeroSection.module.css"
import { Button } from '../componentIndex';
import images from '../../img';
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';
 const HeroSection =()=> {
    const {titleData}=useContext(NFTMarketplaceContext)
    console.log('title',{titleData})
    return (
        <div className={Style.HeroSection}>
           <div className={Style.HeroSection_box}>
                   <div className={Style.HeroSection_box_left}>
                        <h1>{titleData}</h1>
                        <p>Discover the most cutstanding NFTs topics of life,
                        Creative your NFTS and sell them</p>
                        <Button btnName='Start yout search'/>
                    </div>
                    <div className={Style.HeroSection_box_left}> 
                    <Image src={images.hero} alt='hero section' width={500} height={500} /> 
                    </div> 
            </div>
        </div>
    );
}

export default HeroSection;