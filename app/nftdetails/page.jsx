'use client';
import React,{useState,useEffect} from 'react'
import { NFTDetailsImg,NFTDescription,NFTTabs } from '../../NFTDetailsPage/NFTDetailsIndex';
import Style from '../Styles/NFTDetails.module.css'
//INTERNAL IMPORT



const NFTDetails=()=> {
    return (

        <div className={Style.NFTDetailsPage}>
            <div className={Style.NFTDetailsPage_box}>
                  <NFTDetailsImg/>
                 <NFTDescription/> 
             </div>
         </div>
    );
}

export default NFTDetails;