import React from 'react';
import Style  from './Loader.module.css'
import images from '../../img'
import Image from 'next/img'
const Loader=()=> {
    return (
        <div className={Style.Loader}>
            <div className={Style.Loader_box}>
            <div className={Style.Loader_box_img}>
            <Image src={images.Loading} alt='loader'
            width={500} className={Style.Loader_box_img_img}
                objectFit='cover'
            />
        </div>
        </div>
        </div>
    );
}

export default Loader;