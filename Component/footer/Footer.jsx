// @flow 
'use client';
import  React from 'react';
import Image from "next/image";
 import {TiSocialFacebook,
     TiSocialLinkedin,
     TiSocialTwitter,
 TiSocialYoutube,
 TiSocialInstagram,
 TiArrowSortedDown,
 TiArrowSortedUp} from "react-icons/ti";
import {RiSendPlaneFill}from 'react-icons/ri';
//INTERNAL IMPORT
import images from '../../img';
import {Discover,HelpCenter} from '../Navbar/index';
import Style from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={Style.footer}>
           <div className={Style.footer_box}>
                <div className={Style.footer_box_social}>
                    <Image src={images.logo} alt='footer logo' width={100} height={100}/>   
                    <p>
                    the world is gooodthe world is gooodthe world is gooodthe world is gooodthe world is gooodthe world is goood
                    the world is gooodthe world is gooodthe world is gooodthe world is gooodthe world is goood
                    the world is gooodthe world is gooodthe world is gooodthe world is goood
                    </p>
                    <div className={Style.footer_social}>
                    <a href='#'>
                    <TiSocialFacebook />
                    </a>
                    <a href='#'>
                    <TiSocialLinkedin />
                    </a>
                    <a href='#'>
                    <TiSocialTwitter />
                    </a>
                    <a href='#'>
                    <TiSocialYoutube/>
                    </a>
                    <a href='#'>
                    <TiSocialInstagram/>
                    </a>
                    <a href='#'>
                    <TiArrowSortedDown/>
                    </a>
                    <a href='#'>
                    <TiArrowSortedUp/>
                    </a>
                    </div>
                </div> 
                    <div className={Style.footer_box_discover}> 
                    <h3> Help Center </h3> 
                    <Discover/> 
                    </div> 
                    <div className={Style.footer_box_help}> 
                    <h3> Help Center </h3> 
                    <HelpCenter/> 
                    </div> 
                    <div className={Style.subscribe}>
                    <h3>Subscribe </h3> 
                    <div className={Style.subscribe_box}> 
                      <input type="email" placeholder='enter your email'/> 
                      <RiSendPlaneFill className={Style.subscribe_box_send}/> 
                    </div>
                    <div className={Style.subscribe_box_info}>
                    <p> world hey so can world hey so can world hey so can world hey so can world hey so can w
                    world hey so can world hey so can world hey so can world hey so can world hey so can
                    world hey so canorld hey so can world hey so can</p>
                    </div>
                    </div> 
                   
                    
                </div> 

           </div> 
    );
};
export default Footer;