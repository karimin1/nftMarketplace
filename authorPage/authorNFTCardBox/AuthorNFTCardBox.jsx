import React from 'react';
import Style from './AuthorNFTCardBox.module.css'
import images from '../../img'
import { FollowerTabCard } from '../../Component/componentIndex'
import { NFTCardTwo } from '../../collectionPage/CollectionIndex';
const  AuthorNFTCardBox=({collectiables,created,like, follower, following,myNFTS,NFTS})=> {
       //const createdArray=[images.creatorbackground1,images.creatorbackground2,images.creatorbackground3]
        const likeArray=[images.creatorbackground4,images.creatorbackground5,images.creatorbackground6]
        const followerArray=[{
            background:images.creatorbackground7,
            user:images.user7,
            seller:'4564564'
        },
        {
            background:images.creatorbackground8,
            user:images.user8,
            seller:'4564564'
        },
        {
            background:images.creatorbackground9,
            user:images.user9,
            seller:'4564564'
        }]
        const followingArray=[{
            background:images.creatorbackground9,
            user:images.user9,
             seller:'4564564'
        },
        {
            background:images.creatorbackground10,
            user:images.user7,
             seller:'4564564'
        },
        {
            background:images.creatorbackground11,
            user:images.user3,
             seller:'4564564'
        }]
    return (
        <div className={Style.AuthorNFTCardBox}>
        
           {collectiables &&  <div className={Style.AuthorNFTCardBox_box} ><NFTCardTwo  NFTData={NFTS}/></div>}
           
            { created && <div className={Style.AuthorNFTCardBox_box}><NFTCardTwo  NFTData={myNFTS}/></div> }
           {like && <div className={Style.AuthorNFTCardBox_box} ><NFTCardTwo   NFTData={likeArray} /></div>  }
           {follower && <div className={Style.AuthorNFTCardBox_box}> {followerArray.map((el,i)=>(
            <FollowerTabCard  key={i+1} el={el} i={i}/>
        ))}</div> }
            {following && <div className={Style.AuthorNFTCardBox_box}> {followingArray.map((el,i)=>(
            <FollowerTabCard  key={i+1}  el={el} i={i}/>
           ))}</div>}

        
        </div>
    );
}

export default AuthorNFTCardBox;