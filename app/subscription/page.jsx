import React from 'react';
import Style from '../Styles/Subscription.module.css'
import Subscription from '../../subscriptions/Subscription'
const subscription=()=> {
    const subscriptionArray=[
        {
            plan:'Starter',
            price:'$5/mo',
            popular:'finance',
            service:['Automated Reporting','Faster Processing','Customization'],
            info:'Literally you probobably haven',
        },
        {
            plan:'Basic',
            price:'$15/m',
            popular:'popular',
            service:['everyting in strategie','10b build','progress report',"premium support"],
            info :'littarely you probably heard then jean shorts'
        }
    ]
    return (
        <div className={Style.Subscription}>
            <div className={Style.Subscription_box}>
            <div className={Style.Subscription_box_info}>
            <h1>Subscription </h1>
            <p>Pricing to fit the needs of any companie size </p>
            </div>
             <div className={Style.Subscription_box_box}>
                {subscriptionArray.map((el,i)=>(
                    
                    <Subscription key={i+1} i={i} el={el} /> 
                    
                ))}
               

            </div>
            </div>
        </div>
    );
}

export default subscription;