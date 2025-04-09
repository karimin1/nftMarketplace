'use client';
import React ,{useState,useEffect,useConext} from 'react'
import Style from "../Styles/Author.module.css"
import { FollowerTabCard, Title } from '@/Component/componentIndex';
import { Banner } from '../../collectionPage/CollectionIndex';
import { Brand } from '../../Component/componentIndex';
import { AuthorTaps,AuthorNFTCardBox,AuthorProfileCard } from '../../authorPage/ComponentIndex';
import images from '../../img'
//import SMART CONTRACT DATA
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';
 const Author=() =>{
  const followerArray=[{
    background:images.creatorbackground7,
    user:images.user7
},
{
    background:images.creatorbackground8,
    user:images.user8
},
{
    background:images.creatorbackground9,
    user:images.user9
}]   
 const [collectiables,setCollectiables]=useState(true);
    const [created,setCreated]=useState(false);
    const [like,setLike]=useState(false);
    const [follower,setFollower]=useState(false)
    const [following,setFollowing]=useState(false);
    const {currentAccount,fetchMyNFTsOrListedNFTs}=useConext(NFTMarketplaceContext)
    const [NFTs,setNfts]=useState([])
    const [myNFTS,setmyNFTS]=useState([])
    useEffect(()=>{
      fetchMyNFTsOrListedNFTs('fetchItemsListed').then((items)=>
        {setNfts(items)})
    },[])
    useEffect(()=>{
      fetchMyNFTsOrListedNFTs('fetchMyNfts').then((items)=>{
        setmyNFTS(items)
      })
    },[])
    return (
        <div className={Style.Author}>
       <Banner bannerImage={images.creatorbackground1}/> 
       <AuthorProfileCard currentAccount={currentAccount}/> 
   <AuthorTaps setCollectiables={setCollectiables}
            setCreated={setCreated}
            setLike={setLike}
           
            setFollower={setFollower} setFollowing={setFollowing} />   
          
          <Title heading="Popular Creators" 
            paragraph="click on music icon and enjoy nftmusic or audio"/>
            <AuthorNFTCardBox collectiables={collectiables} created={created}
            like={like} follower={follower} following={following}
            NFTs={NFTs}
            myNFTS={myNFTS}
           />   
           <div className={Style.Author_box}>
            {followerArray.map((el,i)=>(
              <FollowerTabCard el={el} i={i}/>  
            ))}
           </div>
         
            <Brand/>  
        </div>
    );
 }
 
 export default Author;