import React from 'react';
import Style from "../Component/Style/Style.css";
import {NFTCard,Filter,Service,Categorie,Title,HeroSection,BigNFTSlider,Subscription,Collection,FollowerTab,AudioLive,Slide,Brand,Video} from '../Component/componentIndex';
const Home=()=> {
    return (    
       <div> 
         <HeroSection/> 
         <Service/>
         <BigNFTSlider/>
         <Filter/>
         <NFTCard/>
        
         <Title heading='Audio Colection' 
         paragraph='explore the NFTs in the most featured categories'/>
          <AudioLive/>
          <FollowerTab/>
        <Slide/>
         <Collection/>
         <Title heading='Feature NFTs' 
         paragraph='explore the NFTs in the most featured categories'/>
         <Categorie/>
        
         <Subscription/>
         <Brand/>
         <Video/>
        </div>
    );
}

export default Home;