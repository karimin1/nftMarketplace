'use client';
import React from "react";
import Style from "./service.module.css";
import Image  from "next/image";
import images from "../../img";
const Service=()=>{
    return(
        <div className={Style.service}>
        
           <div className={Style.service_box}>
           <div className={Style.service_box_item}>
           <Image src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
            />
            <p className={Style.service_box_item_step}>
            <span>Step 1</span>  
            </p>
            <h3>Filter & Discover</h3>
            <p>
                Connect with wallet, discover,buy NFTs,
                sell your money
            </p> 
            </div>
            <div className={Style.service_box_item}>
           <Image src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
            />
            <p className={Style.service_box_item}>
            <span>Step 2</span>  
            </p>
            <h3>Filter & Discover</h3>
            <p>
                Connect with wallet, discover,buy NFTs,
                sell your money
            </p> 
            </div>
            <div className={Style.service_box_item}>
           <Image src={images.service3}
            alt="Filter & Discover"
            width={100}
            height={100}
            />
            <p className={Style.service_box_item}>
            <span>Step 3</span>  
            </p>
            <h3>Filter & Discover</h3>
            <p>
                Connect with wallet, discover,buy NFTs,
                sell your money
            </p> 
            </div>
            <div className={Style.service_box_item}>
           <Image src={images.service4}
            alt="Filter & Discover"
            width={100}
            height={100}
            />
            <p className={Style.service_box_item}>
            <span>Step 4</span>  
            </p>
            <h3>Filter & Discover</h3>
            <p>
                Connect with wallet, discover,buy NFTs,
                sell your money
            </p> 
            </div>
            </div> 
        </div>

    )
}
export default Service;