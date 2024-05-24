import React from 'react';
import Style from "../Component/Style/Style.css";
import {Filter,Service,Categorie,Title,HeroSection,BigNFTSlider,Subscription} from '../Component/componentIndex';
const Home=()=> {
    return (    
       <div> 
         <HeroSection/> 
         <Service/>
         <BigNFTSlider/>
         <Filter/>
         <Title heading='Browse by category' paragraph='explore the NFTs in the most featured categories'/>
         <Categorie/>
         <Subscription/>
        </div>
    );
}

export default Home;