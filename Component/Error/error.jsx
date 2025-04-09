import React,{useState,useEffect,useContext} from 'react';
import Image from 'next/image'
//INTERNAL IMPORT
import Style from './error.module.css'
import images from '../../img'
//IMPORT SMART CONTRACT CONTEXT
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';

const  Error=()=> {
    const {error,setOpenError}=useContext(NFTMarketplaceContext)
    return (
        <div className={Style.error} onClick={()=>{setOpenError(false)}}>
           <div className={Style.error_box}>
           <div className={Style.error_box_info}>
            <Image 
            alt='error' 
            width={200} 
            height={200}
            objectFit='cover' 
            className={Style.error_box_info_img}
            />
              <p>{error}</p> 
            </div>  
        </div>
        </div>
    );
}

export default Error;