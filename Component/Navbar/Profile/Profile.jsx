// @flow 
'use client';
import  React from 'react';
import Image from "next/image";
import Link from "next/link";
import {FaUserAlt,FaRegImage,FaUserEdit}from 'react-icons/fa';
import{MdHelpCenter}from 'react-icons/md';
import {TbDownloadOff,TbDownload}from "react-icons/tb"
//IMPORT INTERNAL
import Style from "./Profile.module.css";
import images from '../../../img';

 const Profile = ({currentAccount})  =>{
    return (
        <div className={Style.profile}>
              <div className={Style.profile_account}>
               <Image src={images.user1} alt="user profile" width={50} heigh={50} className={Style.profile_account_img}/>
                <div className={Style.profile_account_info}>
                <p>Shoaib Bhai</p>
                    <small>{currentAccount.slice(0,15)}...</small>
                </div>
             </div>
             <div className={Style.profile_menu}>
                <div className={Style.profile_menu_one}>
                <div className={Style.profile_menu_one_item}>  
                <FaUserAlt/>
                <p><Link href={{pathname:'/myprofile'}}>My Profile</Link>
                </p>
                </div>
             <div className={Style.profile_menu_one_item}>
                <FaRegImage/>
                <p><Link href={{pathname:'/myItems'}}>My Items</Link>
                </p>
             </div>
             <div className={Style.profile_menu_one_item}>
                <FaUserEdit/>
                <p><Link href={{pathname:'/account'}}>Edit Profile</Link>
                </p>
             </div>

             <div className={Style.profile_menu_one_two}>
             <div className={Style.profile_menu_one_item}>
                <MdHelpCenter/>
                <p><Link href={{pathname:'/contactus'}}>Help</Link>
                </p>
             </div>
             </div>
             <div className={Style.profile_menu_one_item}>
                <TbDownload/>
                <p><Link href={{pathname:'/aboutus'}}>About us</Link>
                </p>
             </div>
             </div>
       </div>
       </div>

    );
};
export default Profile;