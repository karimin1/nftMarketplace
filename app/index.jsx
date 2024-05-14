import React from 'react';
import Style from "../Component/Style/Style.css";
import {Service} from '../Component/componentIndex';
import {HeroSection} from '../Component/componentIndex';
import {BigNFTSlider} from '../Component/componentIndex';
const Home=()=> {
    return (    
       <div> 
         <HeroSection/> 
         <Service/>
         <BigNFTSlider/>
            
        </div>
    );
}

export default Home;