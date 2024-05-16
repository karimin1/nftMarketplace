import React from 'react';
import Style from "../Component/Style/Style.css";
import {Service,HeroSection,BigNFTSlider,Subscription} from '../Component/componentIndex';
const Home=()=> {
    return (    
       <div> 
         <HeroSection/> 
         <Service/>
         <BigNFTSlider/>
         <Subscription/>
        </div>
    );
}

export default Home;