'use client';
import React from 'react';
import Image from 'next/image'
import Style from './CollectionProfile.module.css'
import {TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
TiSocialYoutube,
TiSocialInstagram,
TiArrowSortedDown,
TiArrowSortedUp} from "react-icons/ti";
import images from '../../img'

const  CollectionProfile=() =>{
const cardArray=[1,2,3,4]
    return (
        <div className={Style.CollectionProfile}>
            <div className={Style.CollectionProfile_box}>
                <div className={Style.CollectionProfile_box_left}>
                <Image src={images.nft_image_1}
                    alt='nft image'
                    height={600}
                    width={600}
                    className={Style.CollectionProfile_box_left_img}
                />
                    <div className={Style.CollectionProfile_box_left_social}>
                        <a href='#'>
                        <TiSocialFacebook/>
                        </a>
                        <a href='#'>
                        <TiSocialInstagram/>
                        </a>
                        <a href='#'>
                        <TiSocialTwitter/>
                        </a>
                        <a href='#'>
                        <TiSocialLinkedin/>
                        </a>
                    </div>
                    </div>

                <div className={Style.CollectionProfile_box_middle}>
                <h1> Awesome NFTs Collection</h1>
                <p> said  forget the past and go gog go said  forget the past and go gog go
                said  forget the past and go gog go said  forget the past and go gog go
                said  forget the past and go gog go said  forget the past and go gog go</p>
                    <div className={Style.CollectionProfile_box_middle_box}>
                    {cardArray.map((el,i)=>(
                        <div className={Style.CollectionProfile_box_middle_box_item}>
                        <small >${i+1}95,4683</small> 
                        <small >+{i+2}.11%</small> 
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
       
    );
}

export default CollectionProfile;