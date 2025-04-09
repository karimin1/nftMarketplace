'use client';
import React,{useState,useEffect}from 'react';
import {
    RiUserFollowFill,RiUserUnfollowFill,RiAwardLine,
}from 'react-icons/ri';
import {FollowerTabCard} from '../componentIndex';
import images from '../../img'   
//INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
 const FollowerTab = ({TopCreators}) => {
/*const CardArray=[
        {
            user:images.user1,
            background:images.creatorbackground1
        },
        {
            user:images.user2,
            background:images.creatorbackground2
        },
        {
            user:images.user3,
            background:images.creatorbackground3
        },
        {
            user:images.user4,
            background:images.creatorbackground4
        },
        {
            user:images.user5,
            background:images.creatorbackground5
        },
        {
            user:images.user6,
            background:images.creatorbackground6
        }];
*/
    const FollowingArray=[    {
        user:images.user3,
        background:images.creatorbackground3
    },
    {
        user:images.user6,
        background:images.creatorbackground6
    },
    {
        user:images.user5,
        background:images.creatorbackground5
    },
    ];
    const NewsArray=[    {
        user:images.user6,
        background:images.creatorbackground6
    },
    {
        user:images.user4,
        background:images.creatorbackground4
    },
    {
        user:images.user7,
        background:images.creatorbackground7
    },
    ];
    const [popular,setPopular]=useState(false);
    const [following,setfollow]=useState(false);
    const [news,setNews]=useState(false);
    const openPopular=()=>{
        if(!popular){
            setPopular(true);
        }else{setPopular(false)}
    }
    const openFollowing=()=>{
        if(!following){
            setfollow(true);
        }else{setfollow(false)}
    }
    const openNews=()=>{
        if(!news){
            setNews(true);
        }else{setNews(false)}
    }
    return (
        <div className={Style.FollowerTab}>
        <div className={Style.FollowerTab_title}>
            <h2>Top Creators List ...</h2>
            <div className={Style.FollowerTab_tabs}>
                <div className={Style.FollowerTab_tabs_btn}>
                        <button onClick={()=>openPopular()}>
                        <RiUserFollowFill/>Popular
                        </button>  
                        <button onClick={()=>openFollowing()}>
                        <RiUserFollowFill/>Following
                        </button> 
                        <button onClick={()=>openNews()}>
                        <RiUserFollowFill/>NoteWorthy
                        </button> 
                </div>
            </div>
        </div>
        {popular &&(
        <div className={Style.FollowerTab_tabs_box}>
        {TopCreators.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el}/>

            ))}
        </div>

        )}
        {following &&(
        <div className={Style.FollowerTab_tabs_box}>
        {FollowingArray.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el}/>

            ))}
        </div>

        )}
        {news &&(
        <div className={Style.FollowerTab_tabs_box}>
        {NewsArray.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el}/>

            ))}
        </div>

        )}
        <div className={Style.FollowerTab_member}>
        <div className={Style.FollowerTab_member_box}>
        <a href="#">Show me more</a>
        </div>
        </div>
        </div>
    );
}
export default FollowerTab;