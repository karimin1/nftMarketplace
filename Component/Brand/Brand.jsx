'use client';
import React from 'react';
import Image from 'next/image'
import images from '../../img'
import Style from './Brand.module.css'
import {Button} from '../componentIndex'
const Brand=(props) =>{
    return (
        <div className={Style.Brand}>
            <div className={Style.Brand_box}>
                    <div className={Style.Brand_box_left}>
                        <Image src={images.logo} width={100}
                        height={100}
                        alt='brand logo'/>
                        <h1>Earn Free crypto with Ciscrypt</h1>
                        <p>creative agency that lead and inspire</p>
                    
                        <div className={Style.Brand_box_left_btn}>
                        <Button btnName='create' handleClick={()=>{}}/>
                        <Button btnName='Discover' handleClick={()=>{}}/>
                        </div>
                    </div>
           
                <div className={Style.Brand_box_right_btn}>
                <Image src={images.eran} alt='brand' width={800} height={600}/>
                </div>
            </div>
        </div>
    );
}

export default Brand;