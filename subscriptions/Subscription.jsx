import React from 'react';
import {TiTick} from 'react-icons/ti'
import { Button } from '../Component/componentIndex';
import Style from './Subscription.module.css'
const Subscription=({el,i})=> {
    return (
        <div className={Style.subscription}>
            <div className={Style.subscription_box}>
            <span  className={Style.subscription_box_span}>{el.plan}</span>
            <small className={Style.subscription_box_small}>{el.popular||''}</small>
            <p className={Style.subscription_box_small_price}>{el.price}</p>
            <div className={Style.subscription_box_info}>

               {el.service.map((el,i)=>(
                <div key={i+1} className={Style.subscription_box_info_para}>
                <span> <TiTick/></span>
                {el}
                </div>
               ))}
            </div>

            <Button btnName='Submit' 
            classStyle={Style.button}/>
            </div> 
        </div>
    );
}

export default Subscription;