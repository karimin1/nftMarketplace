'use client';
import React from 'react';
import images from "../../img"
import Style from '../Styles/collection.module.css'
import {Slide,Filter} from '../../Component/componentIndex'
import  {Banner,NFTCardTwo,CollectionProfile} from '../../collectionPage/CollectionIndex'
const Collection=()=> {
     const CollectionArray=[images.nft_image_1,images.nft_image_2,images.nft_image_3,images.nft_image_4,images.nft_image_5,images.nft_image_6,images.nft_image_1,images.nft_image_7,images.nft_image_8]
    return (

        <div className={Style.collection}>
           <Banner bannerImage={images.creatorbackground1}/>  
           <Filter/>
  
           <NFTCardTwo  NFTData={CollectionArray}/> 
      
           <Slide/>
           <CollectionProfile />
        </div>
       

    );
}

export default Collection;