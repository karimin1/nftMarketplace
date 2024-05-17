import React from 'react';
import Style from "../Component/Style/Style.css";
import {Service,Title,HeroSection,BigNFTSlider,Subscription} from '../Component/componentIndex';
const Home=()=> {
    return (    
       <div> 
         <HeroSection/> 
         <Service/>
         <BigNFTSlider/>
         <Subscription/>
         <Title heading='Browse by category' paragraph='explore the NFTs in the most featured categories'/>
        </div>
    );
}

export default Home;