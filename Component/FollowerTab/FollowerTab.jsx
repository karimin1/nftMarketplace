import React,{useState,useEffect}from 'react';
import {
    RiUserFollowFill,RiUserUnfollowFill,RiAwardLine,
}from 'react-icons/ri';
import {FollowerTabCard} from '../componentIndex';
//INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
 const FollowerTab = () => {
    const CardArray=[1,2,3,4,5,6,7,8];
    const FollowingArray=[1,2,3,4,5,6];
    const NewsArray=[1,2,3,4,5];
    const [popular,setPopular]=useState(true);
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
        <div className={Style.FollowerTab_box}>
        {CardArray.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el}/>

            ))}
        </div>

        )}
        {following &&(
        <div className={Style.FollowerTab_tabs_box}>
        {CardArray.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el}/>

            ))}
        </div>

        )}
        {news &&(
        <div className={Style.FollowerTab_tabs_box}>
        {CardArray.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el}/>

            ))}
        </div>

        )}
        <div className={Style.FollowerTab_member}>
        <div className={Style.FollowerTab_member_box}>
        <a href="#">Show me more</a>
        <a href="#">Show me more</a>
        </div>
        </div>
        </div>
    );
}
export default FollowerTab;