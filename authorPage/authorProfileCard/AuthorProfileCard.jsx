import {React,useState} from 'react';
import Image from "next/image"
import { MdVerified,MdOutlineReportProblem} from 'react-icons/md';
import {FiCopy} from "react-icons/fi"
import { TiSocialFacebook,
    TiSocialInstagram,
    TiSocialLinkedin,
    TiSocialYoutube,

 } from 'react-icons/ti';
 import { MdCloudUpload } from 'react-icons/md';
 import {BsThreeDots} from 'react-icons/bs';
 //INTERNAL IMPORT
 import Style from './AuthorProfileCard.module.css';
 import images from '../../img';
 import {Button} from '../../Component/componentIndex'
const AuthorProfileCard=({currentAccount})=> {
    const [Share,setShare]=useState(false);
    const [report,setReport]=useState(false);
    const copyAddress=()=>{
        const copyText=document.getElementById("myInput")
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    const openShare=()=>{
        if(!Share){
            setShare(true);
            setReport(false);
        }else{
            setShare(false)
        }
    }
    const openReport=()=>{
        if(!report){
            setReport(true);
            setShare(false);
        }else{
            setReport(false)
        }
    }
    <div className={Style.AuthorProfileCard}></div>
    return (
        <div className={Style.AuthorProfileCard}>
            <div className={Style.AuthorProfileCard_box}>
            <div className={Style.AuthorProfileCard_box_img}>
            <Image src={images.nft_image_1}
            className={Style.AuthorProfileCard_box_img_img}
            alt='NFT IMAGES' width={220} heigh={220}/>
            </div>
           <div className={Style.AuthorProfileCard_box_info}>
           <h2>Donny Herrera{''}{''}
           <span><MdVerified/>
           </span> {''}
           </h2>         
           <div  className={Style.AuthorProfileCard_box_info_address}>
           <input type='text'
            value={currentAccount}
            id='myInput' />
            <FiCopy onClick={()=>copyAddress()} 
            className={Style.AuthorProfileCard_box_info_address_icon}/>
           </div>
           <p> punk #4786/ an og cryptopunk colecot  , hoarder of NFTs?
           Contributing to @ether _cards,a NFT Monetization Platfolm</p>
           <div className={Style.AuthorProfileCard_box_info_social}>
           <a href='#'>
           <TiSocialFacebook/>
           </a>
           <a href='#'>
           <TiSocialInstagram/>
           </a>
           <a href='#'>
           <TiSocialLinkedin/>
           </a>
           <a href='#'>
           <TiSocialYoutube/>
           </a>
           </div>
           </div>
     

            <div className={Style.AuthorProfileCard_box_share}>
            <Button btnName='Follow' handleClick={()=>{}}/>
            <MdCloudUpload onClick={()=>openShare()} 
            className={Style.AuthorProfileCard_box_share_icon}/>
           {Share && (
            <div  className={Style.AuthorProfileCard_box_share_upload}>
            <p>
            <span>
            <TiSocialFacebook/>
            </span>{""}{""}Facebook
            </p>
            <p>
            <span>
            <TiSocialInstagram/>
            </span>{""}{""}Instagram
            </p>
            <p>
            <span>
            <TiSocialLinkedin/>
            </span>{""}{""}Linkedin
            </p>
            <p>
            <span>
            <TiSocialYoutube/>
            </span>{""}{""}Youtube
            </p>
             </div>
           )}

           <BsThreeDots onClick={()=>openReport() } 
           className={Style.AuthorProfileCard_box_share_icon} />
        {
            report &&(
                <div className={Style.AuthorProfileCard_box_share_report}>
                <span>
                <MdOutlineReportProblem/>
                </span>{""}{""}
                <p>
                Report abouse
                </p>
                </div>
            )
        }
           </div>
            </div>
            </div>
    );
}

export default AuthorProfileCard;