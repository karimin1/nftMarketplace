
'use-client'
import React,{useState,useContext,useEffect} from 'react';
import Image from 'next/image';
import { MdVerified,MdCloudUpload,MdTimer,MdReportProblem,MdOutlineDeleteSweep } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import Link from 'next/link';
import {FaWallet,FaPercentage} from 'react-icons/fa'
import { useRouter } from 'next/router';
import {TiSocialFacebook,
TiSocialLinkedin,
TiSocialTwitter,
TiSocialYoutube,
TiSocialInstagram,
TiArrowSortedDown,
TiArrowSortedUp} from "react-icons/ti";
import {BiDollar, BiTransferAlt,BidDollar} from 'react-icons/bi'
//INTERNAL IMPORT
import Style from './NFTDescription.module.css'
import images from '../../img'
import {Button} from '../../Component/componentIndex'
import { NFTTabs } from '../NFTDetailsIndex';
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';
const NFTDescription=({nft})=> {
    const[social,setSocial]=useState(false)
    const[NFTMenu,setNFTMenu]=useState(false)
    const [first,setfirst]=useState(true)
    const [history,setHistory]=useState(true)
    const [provanance,setProvanance]=useState(false)
    const[owner,setOwner]=useState(false)
    const historyArray=[
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
    ]
    const ProvananceArray=[
        images.user6,
        images.user7,
        images.user8,
        images.user9,
        images.user10,
    ]
    const ownerArray=[
        images.user1,
        images.user8,
        images.user2,
        images.user6,
        images.user5,

    ]
    const openSocial=()=>{
        
           setNFTMenu(false)
            setSocial(!social);
    }
    const openNFTMenu=()=>{ 
            setNFTMenu(!NFTMenu);
            setSocial(false);
           setOwner(false);
        }
       
    const openTabs=(e)=>{
        const btnText=e.target.innerText;
        if(btnText=='Bid History'){
            setHistory(true);
            setProvanance(false)
            setOwner(false)
        }else if(btnText=='Provanance'){
            setHistory(false)
            setProvanance(true)
            setOwner(false)
        }else if(btnText=='Owner'){
            setHistory(false);
            setProvanance(false);
            setOwner(true);
        }
    }
    const openOwner=()=>{
        if(!owner){
            setOwner(true)
            setHistory(false)
            setProvanance(false)
        }else{
            setOwner(false);
            
        }
    }
    const {buyNFT,currentAccount}=useContext(NFTMarketplaceContext)
   const router=useRouter()
    return (
        <div className={Style.NFTDescription}>
            <div className={Style.NFTDescription_box}>
                <div className={Style.NFTDescription_box_share}>
                        <p> Virtual Worlds </p>
                        <div className={Style.NFTDescription_box_share_box}>
                            <MdCloudUpload className={Style.NFTDescription_box_share_box_icon}
                             onClick={()=>openSocial()}/>
                            {social &&(
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href='#'>
                                <TiSocialInstagram/>Instagram
                                </a>     
                                <a href='#'>
                                <TiSocialLinkedin/>Linkedin
                                </a>  
                                <a href='#'>
                                <TiSocialFacebook/>Facebook
                                </a>     
                                <a href='#'>
                                <TiSocialTwitter/>Instagram
                                </a>
                                <a href='#'>
                                <TiSocialYoutube/>Youtube
                                </a>        
                            </div>
                            )}
                            <BsThreeDots
                            className={Style.NFTDescription_box_share_box_icon}
                            onClick={()=>openNFTMenu()} />
                           
                                {NFTMenu && (
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href='#'>
                                <BiDollar/>change price
                                </a>
                                <a href='#'>
                                <BiTransferAlt/>Transfer
                                </a>
                                <a href='#'>
                                <MdReportProblem/>Report abuse
                                </a>
                                <a href='#'>
                                <MdOutlineDeleteSweep/>Delete item
                                </a>
                                </div>
                            )}
                        </div>
                </div>
                <div className={Style.NFTDescription_box_profile}>  
                            <h1>{nft.name} #{nft.tokenId}</h1>
                            <div className={Style.NFTDescription_box_profile_box}> 
                                <div className={Style.NFTDescription_box_profile_box_left}> 
                                    <Image src={images.creatorbackground1} alt='profile'  width={40}
                                    height={40} 
                                    className={Style.NFTDescription_box_profile_box_left_img}/> 
                                    <div className={Style.NFTDescription_box_profile_box_left_info}> 
                                        <small>Creator </small>  <br/> 
                                        <Link href={{pathname:'/author',query:`${nft.seller}`}}> 
                                        <span>  Karli Costa
                                        <MdVerified/> 
                                        </span> 
                                        </Link> 
                                    </div> 
                                </div> 
                                <div  className={Style.NFTDescription_box_profile_box_right}> 
                                            <Image src={images.user2} alt='profile'  width={40}
                                            height={40} 
                                            className={Style.NFTDescription_box_profile_box_left_img}/> 
                                            <div className={Style.NFTDescription_box_profile_box_right_info}> 
                                                <small> Creator</small> <br/> 
                                                <span> kali Costa  <MdVerified/> </span>
                                            </div>  
                                            </div>  
                                            </div> 
                </div> 
                <div className={Style.MFTDescription_box_profile_biding}>

                    <p> <MdTimer/> <span> Auction ending in: </span></p>
                    <div className={Style.NFTDescription_box_profile_biding_box_timer}>
                        <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                        <p>2</p>
                        <span> Days </span>
                        </div>
                        <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                        <p>22</p>
                        <span> Days </span>
                        </div>
                        <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                            <p>45</p>
                            <span> mins </span>
                        </div>
                        <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                            <p>12</p>
                            <span> secs </span>
                        </div>
                    </div>
                    <div className={Style.NFTDescription_box_profile_biding_box_price}>
                        <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                            <small> Current Bid </small>
                            <p>eth
                            {nft.price}<span> =$3,221.22 </span></p>
                        </div>
                        <span> [96 in stock] </span>
                    </div>
                    <div className={Style.NFTDescription_box_profile_biding_box_button}>
                            {currentAccount.tolowerCase()==nft.seller.tolowerCase()?(
                                <p>You cannoy buy own NFT</p>
                            ):currentAccount.tolowerCase()==nft.owner.tolwoerCase()?
                            
                           ( <Button icon=<FaWallet/> 
                            btnName='List on MArkeplace' 
                            handleClick={()=>{
                   router.push(`./reSellToken?id=${nft.tokenId}&tokenURI${nft.tokenURI}`)}}
                            classStyle={Style.button} />):
                                (<Button icon=<FaWallet/> 
                            btnName='Buy NFT' 
                            handleClick={()=>buyNFT(nft)}
                            classStyle={Style.button} />)}
                            <Button icon=<FaPercentage/> 
                            btnName='Make offer' 
                            handleClick={()=>buyNFT(nft)}
                            classStyle={Style.button} />
                    </div>
                </div>
                <div className={Style.NFTDescription_box_profile_biding_box_tabs}> 
                <button onClick={(e)=>openTabs(e)}>Bid History</button>
                <button onClick={(e)=>openTabs(e)}>Provanance</button>
                <button onClick={(e)=>openTabs(e)}>Owner</button>
                </div>
                {history && (
                    <div className={Style.NFTDescription_box_profile_biding_box_card}>
                    <NFTTabs dataTab={historyArray} icon=<MdVerified/>/>
                    </div>
                )}
                { provanance && (
                    <div className={Style.NFTDescription_box_profile_biding_box_card}>
                    <NFTTabs dataTab={ProvananceArray} icon=<MdVerified/>/>
                    </div>
                )}
                { ownerArray && (
                    <div className={Style.NFTDescription_box_profile_biding_box_card}>
                    <NFTTabs dataTab={ProvananceArray} icon=<MdVerified/>/>
                    </div>
                )}
            </div>
         </div>
    );
}

export default NFTDescription;



