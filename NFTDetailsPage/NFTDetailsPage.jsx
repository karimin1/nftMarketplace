
'use client';
import React,{useState,useEffect, useContext} from 'react'
import { NFTDetailsImg,NFTDescription,NFTTabs } from './NFTDetailsIndex' ;
import Style from './NFTDetailsPage.module.css'

//INTERNAL IMPORT



const NFTDetailsPage=({nft})=> {
    return (

        <div className={Style.NFTDetailsPage}>
            <div className={Style.NFTDetailsPage_box}>
                  <NFTDetailsImg nft={nft}/>
                 <NFTDescription nft={nft}/> 
             </div>
         </div>
    );
}

export default NFTDetailsPage;