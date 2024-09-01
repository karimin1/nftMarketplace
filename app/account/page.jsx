'use client'
import React,{useState,useMemo,useCallback,useContext} from 'react';
//IMPORT INTERNAL
import {MdOutlineHttp,MdOutlineContentCopy} from 'react-icons'
import {TiSocialFacebook,TiSocialTwitter,TiSocialInstagram} from 'react-icons/ti'
import {Button} from '../../Component/componentIndex'
import Style from '../Styles/account.module.css'
import images from '../../img'
import Image from 'next/image'
import Form from '../../accountPage/Form/Form'
import {useDropzone} from 'react-dropzone';
const account=()=> {
    const [fileUrl,setFileUrl]=useState(null)
    const onDrop=useCallback(async(acceptedFile)=>{
        setFileUrl(acceptedFile[0]);
    },[])
    const {getRootProps,getInputProps}=useDropzone({
        onDrop,
        accept:'image/*',
        maxSize:500000000,
    })
    return (
        <div className={Style.account}>
            <div className={Style.account_info}>
            <h1>Profile settings</h1> 
           
            <p>
            you can set prefferd dislay name  create your
           profile other personeal settings
            </p>
            </div>
            <div className={Style.account_box}>
            <div className={Style.account_box_img} {...getRootProps()}>
            <input {...getInputProps()}/>
            <Image src={images.user1} alt="account upload"
                width={150} height={150} className={Style.account_box_img_img}
            />
           
             <Form/> 
         
  
             <p className={Style.account_box_img_para}>Change Image</p>
            </div>
         </div>
        </div>
    );
}

export default account;