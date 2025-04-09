
'use client';
import React,{useState,useEffect,useContext} from 'react';
import images from '../../img'
import Image from 'next/image'
//INTERNAL IMPORT
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';
import Style from '../Styles/connectWallet.module.css'
//import from smart contract
const connectWallet=()=> {
    const {currentAccount,connectWallet}=useContext(NFTMarketplaceContext)
    const [active,setActive]=useState(0);
    const providerArray=[
        {provider:images.provider1,
            name:"Metamask",
        },
        {
          provider:images.provider2,
            name:"walletConnect",  
        },
        {provider:images.provider3,
            name:'walletlink',
        },
        {
          provider:images.provider4,
            name:'Metamask',  
        },
    ]
    return (
        <div  className={Style.connectWallet}>
            <div  className={Style.connectWallet_box}>
            <h1>
            Connect your wallet
        </h1>
        <p className={Style.connectWallet_box_para}>
        Connect width one of our avaliable wallet providers
        or create a new</p>
        <div className={Style.connectWallet_box_provider}>
        {providerArray.map((el,i)=>(
            <div key={i+1} className={ `${Style.connectWallet_box_provider_item} ${active==i+1?Style.active:""}`}>
            <Image src={el.provider} alt ={el.name} 
            height={50} width={50} onClick={()=>(setActive(i+1),connectWallet())} /> 
             <div className={Style.connectWallet_box_provider_item_name}>{el.name} </div>  
            </div> 
           
        ))}
        </div>
        </div>
        </div>
    );
}

export default connectWallet;