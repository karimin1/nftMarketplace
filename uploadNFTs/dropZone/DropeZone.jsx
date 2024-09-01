'use client'
import React,{useState,useMemo,useCallback,useContext} from 'react';
import { useDropzone } from 'react-dropzone';
import Style from './DropeZone.module.css'
import images from '../../img'
import Image from 'next/image'
import { ACCEPTED } from 'http-status';
const  DropeZone=({title,
    heading,
    subHeading,
    propriety,
    itemName,website,
    description,
    royalties,
    fileSize,
    category,
    image,})=> {
        const [fileUrl,setFileUrl]=useState(null);
       const onDrop=useCallback((acceptedFile)=>{
        const file=acceptedFile[0];
        const url=URL.createObjectURL(file);
        setFileUrl(url);
    });
      const {getRootProps,getInputProps}=useDropzone({
        onDrop,
        accept:'image/*',
        maxSize:500000000,
      })
    return (
        <div className={Style.DropeZone}>
          <div className={Style.DropeZone_box} {...getRootProps()}>
          <input {...getInputProps()}/>  
          <div className={Style.DropeZone_box_input} >
          <p> {title} </p>
          <div className={Style.DropeZone_box_input_img}>
          <Image src={image} alt="upload" width={100} height={100}
          className={Style.DropeZone_box_input_img_img}/>
          
          </div>
          <p> {heading} </p>
           <p> {subHeading} </p>
          </div>
            </div>  
            {fileUrl &&(
                <aside className={Style.DropeZone_box_aside}> 
                <div className={Style.DropeZone_box_aside_box}>
                <Image src={fileUrl} alt='nft image'
                    width={200} height={100} objectFit='contain'
                    className={Style.DropeZone_box_input_img_img}
                />
                <div className={Style.DropeZone_box_aside_box_preview}>
                <div className={Style.DropeZone_box_aside_box_preview_one}>
                <p><samp>  NFT Name:  </samp>
                {itemName|| ""}
                </p>  
                <p><samp>  Website:  </samp>
                {website|| ""}
                </p>   
                </div> 

                <div className={Style.DropeZone_box_aside_box_preview_two}>   
                <p><span>Description:  </span>
                {description||''} </p>
                </div>
                
                <div className={Style.DropeZone_box_aside_box_preview_three}>   
                <p><span>Royalities:  </span>
                {royalties||''} </p>
                </div>
                
                <div className={Style.DropeZone_box_aside_box_preview_three}>   
                <p><span>Propertie:  </span>
                {propriety||''} </p>
                </div>
                <div className={Style.DropeZone_box_aside_box_preview_three}>   
                <p><span>FileSize:  </span>
                {fileSize||''} </p>
                </div>
                <div className={Style.DropeZone_box_aside_box_preview_three}>   
                <p><span>Category:</span>
                {category||''} </p>
                </div>
                </div>
                </div>
                </aside>
            ) }
        </div>
    );
}

export default DropeZone;