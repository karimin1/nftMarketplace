
'use client';
import React,{useContext,useEffect} from 'react';
import {NFTCard,Filter,Service,Categorie,Title,HeroSection,BigNFTSlider,
  Subscription,Collection,FollowerTab,AudioLive,
  Slide,Brand,Video} from '../Component/componentIndex';
  import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';
  import {ethers} from 'ethers'
  import {getTopCreators} from '../TopCreator/TopCreator'

const Home=()=> {

useEffect(()=>{
  console.log('first one render')
  checkifWalletConnected()
 
},[])
const {checkifWalletConnected}=useContext(NFTMarketplaceContext)
   const [nfts,setNfts]=useState([])
   const [nftsCopy,setNftsCopy]=useState([]);
//CREATOR LIST
const creators=getTopCreators(nfts)
console.log(creators)
useEffect(()=>{
    fetchNFTs().then((item)=>{
        setNfts(item.reverse())
        setNftsCopy(item)
        console.log(nfts)
    })
},[])
    return (    
       <div> 
         <HeroSection/> 
         <Service/>
         <BigNFTSlider/>
        <Filter/>
        {nft.length==0?<Loader/>:<NFTCard NFTData={NFTData}/>}
        
         <Title heading='Audio Colection' 
         paragraph='explore the NFTs in the most featured categories'/>
          <AudioLive/>
          {creators.length==0? <Loader/>:  <FollowerTab TopCreators={creators}/>

          }
        
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