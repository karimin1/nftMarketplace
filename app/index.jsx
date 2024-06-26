import React from 'react';
import Style from "../Component/Style/Style.css";
import {NFTCard,Filter,Service,Categorie,Title,HeroSection,BigNFTSlider,Subscription,Collection,FollowerTab,AudioLive} from '../Component/componentIndex';
const Home=()=> {
    return (    
       <div> 
         <HeroSection/> 
         <Service/>
         <BigNFTSlider/>
         <Filter/>
         <NFTCard/>
         <FollowerTab/>
         <Title heading='Audio Colection' 
         paragraph='explore the NFTs in the most featured categories'/>
          <AudioLive/>
         <Title heading='New Collection' 
         paragraph='explore the NFTs in the most featured categories'/>
         <Collection/>
         <Title heading='Feature NFTs' 
         paragraph='explore the NFTs in the most featured categories'/>
         <Categorie/>
         <Subscription/>
        </div>
    );
}

export default Home;