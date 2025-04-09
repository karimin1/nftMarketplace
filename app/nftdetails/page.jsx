'use client';
import React,{useState,useEffect, useContext} from 'react'
import Style from '../Styles/NFTDetails.module.css'
import { Categorie,Brand } from '@/Component/componentIndex';
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';
import { NFTDetailsPage} from '../../NFTDetailsPage/NFTDetailsIndex'
import { useSearchParams } from 'next/navigation';
//INTERNAL IMPORT


const NFTDetails=()=> {
    const {currentAccount}=useContext(NFTMarketplaceContext)
const [nft,setNFT]=useState(
    {
        image:'',
        tokenId:'',
        name:'',
        owner:'',
        price:'',
        seller:'',
    }
)
const searchParams=userSearchParams()

useEffect(()=>{
    const newparmDAta={}
    searchParams.forEach((key,value) =>{
        newparmDAta[key]=value;
})   ;
    setNFT((NFTprev)=>({
        ...NFTprev,
        ...newparmDAta,
    }))
},[searchParams]);
    return (

        <div className={Style.NFTDetailsPage}>
            <div className={Style.NFTDetailsPage_box}>
                  <NFTDetailsPage nft={nft}/>
                 <Categorie/> 
                 <Bran/> 
             </div>
         </div>
    );
}

export default NFTDetails;